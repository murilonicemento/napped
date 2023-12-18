import { Spinner, Stack } from "@chakra-ui/react";

export function Loading() {
  return (
    <Stack direction="row" spacing={4}>
      <Spinner size="xl" />
    </Stack>
  );
}
