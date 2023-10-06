import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MealsList from './Meal-list';
import IMeal from '../../helpers/meal';


describe('MealList', () => {
  const mealListStub: IMeal[] = [
    {
      idMeal: 1,
      strMeal: "fakeMeal",
      strArea: "fakeArea",
      strSource: "fakeSourcce",
      strYoutube: "fakeYoutube",
      strMealThumb: "fakeThumb",
      strCategory: "fakeCategory",
      strInstructions: "fakeInstructions",
    },
    {
      idMeal: 2,
      strMeal: "fakeMeal",
      strArea: "fakeArea",
      strSource: "fakeSourcce",
      strYoutube: "fakeYoutube",
      strMealThumb: "fakeThumb",
      strCategory: "fakeCategory",
      strInstructions: "fakeInstructions",
    },
    {
      idMeal: 3,
      strMeal: "fakeMeal",
      strArea: "fakeArea",
      strSource: "fakeSourcce",
      strYoutube: "fakeYoutube",
      strMealThumb: "fakeThumb",
      strCategory: "fakeCategory",
      strInstructions: "fakeInstructions",
    },
  ]

  it('should render correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MealsList mealList={mealListStub} />
      </MemoryRouter>
    );

    const meal1 = getByTestId('1')
    const meal2 = getByTestId('2')
    const meal3 = getByTestId('3')
    
    expect(meal1).toBeInTheDocument();
    expect(meal2).toBeInTheDocument();
    expect(meal3).toBeInTheDocument();
  })
});