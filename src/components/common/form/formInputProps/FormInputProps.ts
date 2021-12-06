export default interface FormInputProps {
  name: string;
  id: string;
  control: any;
  label: string;
  options?: readonly string[];
  setValue?: (name: string, item: any[]) => void;
}
