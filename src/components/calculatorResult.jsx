import { BreadcrumbItem } from './ivfCalculator/BreadcrumbItem';
import { IVFCalculator } from './ivfCalculator/IVFCalculator';
import { NavigationItem } from './ivfCalculator/NavigationItem';

export default function CalculatorResult(){
  return(
    <>
    <BreadcrumbItem />
    <IVFCalculator />
    <NavigationItem/>
    </>
  )
}