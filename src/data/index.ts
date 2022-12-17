
export interface DataItem {
  id: number
  name: string,
  manufacturingImprovementComplex: string
  productionTimeDays: number
  monthsWarranty: number
  termsOfPayment: string
  lotProductionCost: number
}
export type data = DataItem[]


export const data = [
  {
    id: 1,
    name: "ОАО ТЕСТ1",
    manufacturingImprovementComplex: '',
    productionTimeDays: 80,
    monthsWarranty: 24,
    termsOfPayment: "30%",
    lotProductionCost: 3700000
  },
  {
    id: 2,
    name: "ОАО ТЕСТ2",
    manufacturingImprovementComplex: '',
    productionTimeDays: 80,
    monthsWarranty: 24,
    termsOfPayment: "30%",
    lotProductionCost: 3200000
  },
  {
    id: 3,
    name: "ОАО ТЕСТ3",
    manufacturingImprovementComplex: '',
    productionTimeDays: 80,
    monthsWarranty: 24,
    termsOfPayment: "30%",
    lotProductionCost: 2800000
  }
]