import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {
    isAllowed: boolean;
};

export function ProtectedRoute({ isAllowed }: Props) {
    const location = useLocation();

    if (!isAllowed) {
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    return <Outlet />;
}
