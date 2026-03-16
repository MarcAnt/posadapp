"use client";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type TagsInputProps = {
  onCheckedChange: (checked: boolean) => void;
  isChecked?: boolean;
  children?: React.ReactNode;
};

const Tags = ({ onCheckedChange, isChecked, children }: TagsInputProps) => {
  return (
    <Badge variant={"outline"} className="p-0">
      <Button
        variant={"ghost"}
        size={"sm"}
        className={`w-full text-xs ${isChecked ? "bg-primary text-white" : ""} cursor-pointer`}
        aria-checked={isChecked}
        role={"checkbox"}
        onClick={() => {
          onCheckedChange(!isChecked);
        }}
        tabIndex={0}
        type="button"
      >
        {children}
      </Button>
    </Badge>
  );
};

export default Tags;
