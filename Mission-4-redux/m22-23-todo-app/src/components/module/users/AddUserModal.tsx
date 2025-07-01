import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader,DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

const AddUserModal = () => {
    const form = useForm()
    const dispatch =useAppDispatch()

    const onSubmit : SubmitHandler<FieldValues> = data =>{
        console.log(data);
        dispatch(addUser(data as IUser))
    }

  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button className=" text-center">Add User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Fill up the form</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

        {/* form start */}
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="write your name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        {/* form end */}


          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
      </form>
      </Form>
        </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;
