type Condition = "Superb" | "Good" | "Bad";

const ecoPointsMatrix: Record<string, Record<Condition, number>> = {
  Apple: {
    Superb: 100,
    Good: 70,
    Bad: 40,
  },
  Samsung: {
    Superb: 90,
    Good: 60,
    Bad: 30,
  },
  Dell: {
    Superb: 80,
    Good: 55,
    Bad: 25,
  },
  HP: {
    Superb: 75,
    Good: 50,
    Bad: 20,
  },
  Lenovo: {
    Superb: 70,
    Good: 45,
    Bad: 18,
  },
  Asus: {
    Superb: 68,
    Good: 43,
    Bad: 17,
  },
  Acer: {
    Superb: 65,
    Good: 40,
    Bad: 15,
  },
  OnePlus: {
    Superb: 78,
    Good: 55,
    Bad: 28,
  },
  Xiaomi: {
    Superb: 60,
    Good: 38,
    Bad: 18,
  },
  Realme: {
    Superb: 58,
    Good: 35,
    Bad: 16,
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
