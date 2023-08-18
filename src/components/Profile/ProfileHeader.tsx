import { Avatar, Typography } from "@material-tailwind/react";

export const ProfileHeader = () => {
  return (
    <div className="flex bg-gray-100 p-3 rounded-lg w-full shadow-sm m-0 gap-3 dark:bg-gray-900">
      <Avatar
        size="lg"
        variant="circular"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        alt="tania andrew"
      />
      <div className="flex w-full flex-col gap-0.5  dark:text-white">
        <div className="flex items-center justify-between dark:text-white">
          <Typography variant="h5" color="blue-gray  ">
            أمير نشوان
          </Typography>
        </div>
        <Typography color="blue-gray " >اليوم</Typography>
      </div>
    </div>
  );
};
