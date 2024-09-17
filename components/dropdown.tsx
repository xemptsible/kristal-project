"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "./cva/button";
import { useEffect, useRef, useState } from "react";
import { IDropdownProps, IDropdownItem } from "@/assets/interfaces";

import useOutsideClickHandler from "@/app/helpers/click-handler";

export function DropdownMenu({
  id,
  title,
  data,
  selectedId,
  onSelect,
}: IDropdownProps) {
  const [isOpen, toggleDropdown] = useState<boolean>(false);
  const [indexItem, setItem] = useState<IDropdownItem | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  );

  const handleChange = (item: IDropdownItem) => {
    setItem(item);
    onSelect && onSelect(item.text);
    toggleDropdown(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelection = data.find((item) => item.id === selectedId);
      newSelection && setItem(newSelection);
    } else {
      setItem(undefined);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClickHandler({
    ref: dropdownRef,
    handler: () => toggleDropdown(false),
  });

  return (
    <div
      ref={dropdownRef}
      className="flex flex-col flex-grow sm:flex-grow-0 sm:w-[200px] relative"
    >
      <Button
        id={id}
        variant={"action"}
        className="flex flex-grow gap-4"
        type="button"
        onClick={() => toggleDropdown(!isOpen)}
      >
        <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">
          {indexItem?.text || title}
        </span>
        <ChevronDown />
      </Button>
      {isOpen ? (
        <div>
          <ul className="border absolute w-full rounded-[4px] z-10 bg-background">
            {data.map((item) => (
              <DropdownItem item={item} handler={handleChange} key={item.id} />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function DropdownItem({
  item,
  handler,
}: {
  item: IDropdownItem;
  handler: (item: IDropdownItem) => void;
}) {
  return (
    <li
      onClick={() => handler(item)}
      className="flex cursor-pointer hover:bg-color-hover px-4 py-2"
    >
      <span>{item.text}</span>
    </li>
  );
}
