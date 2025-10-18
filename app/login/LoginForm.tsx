export const LoginForm = () => {

    return (
        <form>
            <div className="mb-5">
                <label htmlFor="email" className="block test-sm font-bold mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Type here your email"
                    className="border-1 border-gray-600 rounded-sm p-3" />
            </div>
            <div>
                <label htmlFor="passwd" className="block test-sm font-bold mb-1">Password</label>
                <input
                    type="email"
                    id="passwd"
                    placeholder="Type here your password"
                    className="border-1 border-gray-600 rounded-sm p-3"/>
            </div>
        </form>
    )
}