/* eslint-disable @next/next/no-img-element */
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { useSession, signIn, signOut } from "next-auth/react"

type Props = {};
const Login: React.FC<Props> = ({ }) => {
    const { data: session } = useSession();
    return (
        <div>
            {session ? (
                // Render Google image instead of the CgProfile icon
                // eslint-disable-next-line @next/next/no-img-element
                <div className="flex">
                    <img
                        onClick={(() => signOut())}
                        src={session.user?.image!}
                        alt='user-avatar'
                        className='mx-auto rounded-full cursor-pointer lg:w-9 lg:mt-2 lg:mb-2 lg:mr-3 2xl:h-12 2xl:w-12 hover:opacity-50'
                    />
                    <p className="lg:mt-3 lg:mr-4">{session.user?.name}</p>
                </div>
            ) : (
                // Render the login button
                <button onClick={(e) => {
                    e.preventDefault();
                    signIn('google');
                }}>
                    <div className="py-2 text-base font-medium md:mr-6 text-zinc-600 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300 font-Poppins">
                        Login
                    </div>
                </button>
            )}
        </div>
    )
}

export default Login;
