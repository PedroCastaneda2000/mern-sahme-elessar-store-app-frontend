import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "./ui/dialog";

type Props = {
  onDelete: () => void;
};

const DeleteButton = ({ onDelete }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="text-14sm xl:text-16sm delay-1 bg-button-destruction hover:bg-button-destruction-hover h-11 w-full rounded-sm font-serif font-medium md:max-w-[156px]"
        >
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent
        className="flex max-w-md flex-col gap-6 rounded-sm bg-white px-3 pb-12 pt-6"
        aria-labelledby="dialog-title"
      >
        <DialogTitle
          id="dialog-title"
          className="text-14sm xl:text-16sm font-serif font-medium"
        >
          Are you sure you want to delete this product?
        </DialogTitle>

        <div className="flex justify-end gap-3">
          <DialogClose asChild>
            <Button
              variant="secondary"
              className="text-12sm xl:text-14sm h-8 w-24 rounded-sm bg-gray-200 font-serif font-medium hover:bg-gray-400"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            className="text-12sm xl:text-14sm bg-button-destruction hover:bg-button-destruction-hover h-8 w-full rounded-sm font-serif font-medium md:max-w-[156px]"
            onClick={onDelete}
          >
            Confirm Deletion
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteButton;
