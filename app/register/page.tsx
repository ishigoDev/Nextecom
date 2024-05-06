export const revalidate = 0
import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";
import { Suspense } from "react";

const Register = async () =>{
    const currentUser = await getCurrentUser();
    return (<Container>
        <Suspense fallback={<div>Loading...</div>}>
        <FormWrap>
            <RegisterForm currentUser={currentUser}/>
        </FormWrap>
        </Suspense>
    </Container>)
}

export default Register;