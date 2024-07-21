import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  src: string | null;
  email: string | null;
  name: string | null;
}
export default function AvatarDropdown({ src, email, name }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-10 w-10 cursor-pointer">
          <AvatarImage src={src ?? ""} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="flex items-center gap-2 p-2">
          <div className="grid gap-0.5 leading-none">
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">{email}</div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
