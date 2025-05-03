type Condition = "Superb" | "Good" | "Bad";

const ecoPointsMatrix: Record<string, Record<Condition, number>> = {
  Samsung: {
    Superb: 60,
    Good: 40,
    Bad: 20,
  },
  Apple: {
    Superb: 80,
    Good: 60,
    Bad: 30,
  },
  Dell: {
    Superb: 70,
    Good: 50,
    Bad: 25,
  },
  HP: {
    Superb: 65,
    Good: 45,
    Bad: 20,
  },
  default: {
    Superb: 50,
    Good: 30,
    Bad: 15,
  },
};

export const calculateEcoPoints = (itemBrand: string, itemCondition: string): number => {
  const brand = ecoPointsMatrix[itemBrand] || ecoPointsMatrix["default"];
  const condition = itemCondition as Condition;
  return brand[condition] || 0;
};
