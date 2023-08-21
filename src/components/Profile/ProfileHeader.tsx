import { Avatar, Typography } from "@material-tailwind/react";

export const ProfileHeader = () => {
  return (
    <div className="flex bg-gray-100 p-1 rounded-lg w-full shadow-sm m-0 gap-3 max-h-[70px]">
      <Avatar
        size="md"
        variant="circular"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        alt="tania andrew"
      />
      <div className="flex w-full flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <Typography variant="h6" color="blue-gray">
            أمير نشوان
          </Typography>
        </div>
        <Typography color="blue-gray">اليوم</Typography>
      </div>
    </div>
  );
};
