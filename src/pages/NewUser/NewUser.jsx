import { useSearchParams } from "react-router-dom";
import UserTable from "./component/UserTabe"

export default function NewUser() {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("id");
    // console.log(userId)
    return (
        <div className="flex items-center justify-center mt-10">
            <UserTable />
        </div>
    );
}
