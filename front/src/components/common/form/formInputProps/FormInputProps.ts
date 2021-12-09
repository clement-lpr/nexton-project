import Option from "@models/option.model";

export default interface FormInputProps {
  name: string;
  id: string;
  control: any;
  label: string;
  options?: Option[];
  setValue?: (name: string, item: any[]) => void;
}
