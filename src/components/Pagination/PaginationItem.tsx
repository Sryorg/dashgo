import { Button } from "@chakra-ui/react";

interface PaginatiotItemProps {
  number: number;
  onPageChange: (page: number) => void;
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, onPageChange, number }: PaginatiotItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }
  
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}
