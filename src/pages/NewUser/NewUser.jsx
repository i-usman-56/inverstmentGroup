import { useSearchParams } from "react-router-dom";
import UserTable from "./component/UserTabe"

export default function NewUser() {
    // console.log(userId)
    return (
        <div className="flex items-center justify-center mt-10">
            <UserTable />
        </div>
    );
}
