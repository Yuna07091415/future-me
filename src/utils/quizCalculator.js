import { CAREERS_DATA } from '../data/careersData';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';

export const CATEGORY_NAMES = {
  tech: 'Texnologiya va IT',
  creative: 'Ijodkorlik va Dizayn',
  business: 'Biznes va Moliya',
  science: 'Ilm-fan va Tibbiyot',
  social: 'Ijtimoiy va Ta\'lim',
  engineering: 'Amaliy va Muhandislik',
  legal: 'Huquq va Diplomatiya'
};

export const CATEGORY_COLORS = {
  tech: '#22D3EE',
  creative: '#EC4899',
  business: '#10B981',
  science: '#14B8A6',
  social: '#38BDF8',
  engineering: '#A855F7',
  legal: '#F59E0B'
};

export function calculateQuizResults(answers) {
  // Initial category scores accumulator
  const rawScores = {
    tech: 0,
    creative: 0,
    business: 0,
    science: 0,
    social: 0,
    engineering: 0,
    legal: 0
  };

  const maxPossible = {
    tech: 0,
    creative: 0,
    business: 0,
    science: 0,
    social: 0,
    engineering: 0,
    legal: 0
  };

  // Calculate maximum potential scores across all questions
  QUIZ_QUESTIONS.forEach(q => {
    const qMax = { tech: 0, creative: 0, business: 0, science: 0, social: 0, engineering: 0, legal: 0 };
    q.options.forEach(opt => {
      Object.entries(opt.scores || {}).forEach(([cat, val]) => {
        if (val > (qMax[cat] || 0)) {
          qMax[cat] = val;
        }
      });
    });
    Object.entries(qMax).forEach(([cat, val]) => {
      maxPossible[cat] = (maxPossible[cat] || 0) + val;
    });
  });

  // Calculate actual scores from user answers
  Object.entries(answers).forEach(([qId, optIdx]) => {
    const question = QUIZ_QUESTIONS.find(q => q.id === Number(qId));
    if (question && question.options[optIdx]) {
      const selectedOption = question.options[optIdx];
      Object.entries(selectedOption.scores || {}).forEach(([cat, val]) => {
        if (rawScores[cat] !== undefined) {
          rawScores[cat] += val;
        }
      });
    }
  });

  // Calculate normalized percentage (15% to 98% scale for realistic visualization)
  const categoryPercentages = {};
  Object.keys(rawScores).forEach(cat => {
    const maxVal = maxPossible[cat] || 1;
    const ratio = rawScores[cat] / maxVal;
    const pct = Math.min(98, Math.max(15, Math.round(ratio * 90 + 10)));
    categoryPercentages[cat] = pct;
  });

  // Sort categories by score
  const sortedCategories = Object.entries(categoryPercentages)
    .sort((a, b) => b[1] - a[1])
    .map(([cat, score]) => ({
      categoryId: cat,
      name: CATEGORY_NAMES[cat] || cat,
      score,
      color: CATEGORY_COLORS[cat] || '#A855F7'
    }));

  const primaryCategory = sortedCategories[0]?.categoryId || 'tech';
  const secondaryCategory = sortedCategories[1]?.categoryId || 'business';

  // Calculate match percentage for each career in CAREERS_DATA
  const scoredCareers = CAREERS_DATA.map(career => {
    let matchScore = 0;

    // Career primary category weight (50%)
    const primaryCatScore = categoryPercentages[career.categoryId] || 50;
    matchScore += primaryCatScore * 0.5;

    // Matching criteria weight (40%)
    let criteriaSum = 0;
    (career.matchCriteria || []).forEach(crit => {
      criteriaSum += categoryPercentages[crit] || 50;
    });
    const avgCriteria = criteriaSum / ((career.matchCriteria && career.matchCriteria.length) || 1);
    matchScore += avgCriteria * 0.4;

    // Baseline consistency (10%)
    matchScore += 10;

    // Match percentage capped between 55% and 98%
    const finalPercent = Math.min(98, Math.max(55, Math.round(matchScore)));

    // Generate personalized why-recommended explanation
    let personalizedReason = career.whyRecommended;
    if (career.categoryId === primaryCategory) {
      personalizedReason = `Sizning eng yuqori ko‘rsatkichingiz (${CATEGORY_NAMES[primaryCategory]}) ushbu kasb talablariga 100% mos keladi. Sizdagi kuchli xarakter va qobiliyatlar mazkur sohada yetakchi bo‘lishingizga yordam beradi.`;
    } else if (career.categoryId === secondaryCategory) {
      personalizedReason = `Sizda ikkinchi kuchli yo‘nalish (${CATEGORY_NAMES[secondaryCategory]}) yuqori shakllangan bo‘lib, bu kasbda ham nazariya, ham amaliyotni mukammal uyg‘unlashtira olasiz.`;
    }

    return {
      ...career,
      matchPercentage: finalPercent,
      personalizedReason
    };
  });

  // Sort by match percentage descending
  scoredCareers.sort((a, b) => b.matchPercentage - a.matchPercentage);

  // Top 3 careers
  const topCareers = scoredCareers.slice(0, 3).map((car, idx) => ({
    ...car,
    rank: idx + 1
  }));

  return {
    rawScores,
    categoryPercentages,
    sortedCategories,
    topCategories: sortedCategories.slice(0, 3),
    topCareers,
    allScoredCareers: scoredCareers,
    totalAnswered: Object.keys(answers).length
  };
}
