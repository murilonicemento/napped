import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import { DeleteErrorAPI } from "../utils/types";

export function DeleteAlert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const userId = auth.user?.id;

  async function handleDeleteAccount() {
    try {
      if (userId) {
        const isDeleted = await auth.deleteAccount(userId);

        if (isDeleted) toast.success("Usuário deletado com sucesso");

        return navigate("/login");
      }

      return toast.error("Id do usuário não fornecido.");
    } catch (error) {
      const data = (error as AxiosError<DeleteErrorAPI>).response?.data;
      const message = data?.error.message;

      return toast.error(`${message}`);
    }
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="w-full text-white bg-gradient-to-b from-error to-dark-red flex justify-center border rounded border-none p-2"
      >
        Discard
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent className="bg-dark-10 text-white p-4 mt-40 rounded-md">
          <AlertDialogHeader className="flex items-center justify-between pt-3 pb-3 text-xl">
            Deletar Conta?
            <AlertDialogCloseButton className="text-base" />
          </AlertDialogHeader>
          <AlertDialogBody>
            Tem certeza que deseja deletar sua conta? Após deletar a conta não
            será mais possível ter acesso ao Napped.
          </AlertDialogBody>
          <AlertDialogFooter className="flex items-center justify-end gap-3">
            <Button
              ref={cancelRef}
              onClick={onClose}
              className="rounded-md bg-dark-30 pt-2 pr-3 pb-2 pl-3"
            >
              Não
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={handleDeleteAccount}
              className="rounded-md bg-error pt-2 pr-3 pb-2 pl-3 hover:bg-dark-red transition-colors"
            >
              Sim
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
