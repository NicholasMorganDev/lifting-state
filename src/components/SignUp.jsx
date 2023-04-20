export default function SignUp ({ setUser }) {

  return (
    <>
      <h2>SignUp</h2>
      <button onClick={() => setUser('New User')}>Sign Up</button>
    </>
  )
}