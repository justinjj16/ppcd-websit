import { useState, useEffect, ComponentType } from "react";
import { useRouter } from "next/navigation";
import { validateToken } from "@/lib/api";

const withPrivateRoute = <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  const WithPrivateRoute: React.FC<P> = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    const isAuthenticated =
      typeof window !== "undefined" &&
      !!localStorage.getItem("ppcdchurch-auth-token");

    useEffect(() => {
      (async () => {
        if (!isAuthenticated) {
          router.push("/admin/login");
        } else if (isAuthenticated) {
          const validate = await validateToken(
            localStorage.getItem("ppcdchurch-auth-token"),
          );
          if (validate.isValid) {
            setLoading(false);
          } else {
            router.push("/admin/login");
          }
        } else {
          setLoading(false);
        }
      })();
    }, [isAuthenticated, router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithPrivateRoute;
};

export default withPrivateRoute;
