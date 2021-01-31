import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Spiner from "../Loaders/Spiner";

type Props = {
  categories: CategoryType[];
  handleSubmitForm: (data: SubmitJokeData) => Promise<void>;
};
const NewJokeForm = ({ categories, handleSubmitForm }: Props) => {
  const {
    register,
    errors,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm();

  const [jokeType, setJokeType] = useState<string>("single");
  if (isSubmitting && !isSubmitSuccessful) {
    return (
      <Wrapper>
        <Spiner />
      </Wrapper>
    );
  }
  if (isSubmitSuccessful) {
    return (
      <Wrapper>
        <h3>Successfully created new joke!</h3>
      </Wrapper>
    );
  }
  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <h2>Add new joke</h2>

      <FormControl>
        <label>Joke category</label>
        <Select name="category" ref={register({ required: true })}>
          <option value="Any">Select joke category</option>
          {categories &&
            categories.map((cat) => (
              <option key={`option-${cat}`} value={cat}>
                {cat}
              </option>
            ))}
        </Select>
      </FormControl>
      <FormControl>
        <label>Joke type</label>
        <Select
          name="type"
          onChange={(e) => setJokeType(e.target.value)}
          ref={register({ required: true })}
        >
          <option value="single">Select joke type</option>
          <option value="single">Single</option>
          <option value="twopart">Two part</option>
        </Select>
      </FormControl>
      {jokeType === "single" ? (
        <FormControl>
          <label>Joke</label>
          <Input
            name="joke"
            ref={register({ required: true })}
            placeholder="Joke"
          />
          {errors.joke && errors.joke.type === "required" && (
            <span>This field is required</span>
          )}
        </FormControl>
      ) : (
        <>
          <FormControl>
            <label>Setup</label>
            <Input
              name="setup"
              ref={register({ required: true })}
              placeholder="Setup"
            />
            {errors.setup && errors.setup.type === "required" && (
              <span>This field is required</span>
            )}
          </FormControl>
          <FormControl>
            <label>Delivery</label>
            <Input
              name="delivery"
              ref={register({ required: true })}
              placeholder="Delivery"
            />
            {errors.delivery && errors.delivery.type === "required" && (
              <span>This field is required</span>
            )}
          </FormControl>
        </>
      )}

      <SubmitButton disabled={isSubmitting} value={"Submit"} type="submit" />
    </Form>
  );
};

export default NewJokeForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 5px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;
const Input = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.fontPrimary};
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
`;
const Select = styled.select`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.fontPrimary};
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
`;
const SubmitButton = styled.input`
  background: ${({ theme }) => theme.fontActive};
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  padding: 15px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  font-weight: lighter;
`;
