import { sum } from "../components/sum";

test.skip("sum function should be calculated the sum of two number",()=>{
  const result=sum(3,4)
  expect(result).toBe(7)
})
