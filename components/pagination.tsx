import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./cva/button";
import { IPaginationProps, IPagniation } from "@/assets/interfaces";
import { PaginationDots } from "@/assets/data";
import { useMemo } from "react";

export function Pagination({
  currentPage,
  totalCount,
  pageSize,
  siblingCount = 1,
  onPageChange,
}: IPagniation) {
  const paginationRange: (string | number)[] | undefined =
    PaginationLogic({
      currentPage,
      totalCount,
      pageSize,
      siblingCount,
    }) ?? [];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  function goToNext() {
    onPageChange(currentPage + 1);
  }

  function goToPrevious() {
    onPageChange(currentPage - 1);
  }

  const lastIndex = paginationRange[paginationRange.length - 1];

  const disabledColor = "hsl(0, 0%, 70%)";
  const selectedColor = "text-color-main-text";
  const activeColor = "#ffffff";

  return (
    <div className="flex flex-grow flex-wrap justify-center gap-1">
      <Button
        disabled={currentPage === 1}
        variant={"button"}
        size={"icon"}
        onClick={goToPrevious}
      >
        <ChevronLeft color={currentPage === 1 ? disabledColor : "#ffffff"} />
      </Button>
      {paginationRange.map((pageNum, i) => {
        if (pageNum === PaginationDots) {
          return (
            <Button key={i} disabled={true} variant={"icon"} size={"icon"}>
              &#8230;
            </Button>
          );
        }
        return (
          <Button
            key={i}
            variant={"icon"}
            size={"pagination"}
            className={
              pageNum === currentPage
                ? `${selectedColor} font-bold`
                : "font-bold"
            }
            onClick={() => {
              const number: number = pageNum as number;
              onPageChange(number);
            }}
          >
            {pageNum}
          </Button>
        );
      })}
      <Button
        disabled={currentPage === lastIndex}
        variant={"button"}
        size={"icon"}
        onClick={goToNext}
      >
        <ChevronRight
          color={currentPage === lastIndex ? disabledColor : activeColor}
        />
      </Button>
    </div>
  );
}

function PaginationLogic({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: IPaginationProps) {
  const paginationRange = useMemo(() => {
    // Trả lại tổng số trang làm tròn lên
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, index: number) => index + start);
    };

    // Sibling count + (first page + last page + current page + 2 pagination dots)
    const defaultPageNumbers = siblingCount + 5;

    if (defaultPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const firstIndex = 1;
    const lastIndex = totalPageCount;


    const hasLeftSibling = leftSiblingIndex > 2;
    const hasRightSibling = rightSiblingIndex < totalPageCount - 2;

    if (!hasLeftSibling && hasRightSibling) {
      const leftItemCount = defaultPageNumbers - 1;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, PaginationDots, totalPageCount];
    }

    if (hasLeftSibling && !hasRightSibling) {
      const rightItemCount = defaultPageNumbers - 1;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );

      return [firstIndex, PaginationDots, ...rightRange];
    }

    if (hasLeftSibling && hasRightSibling) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [
        firstIndex,
        PaginationDots,
        ...middleRange,
        PaginationDots,
        lastIndex,
      ];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
}
