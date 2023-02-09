import React, { useCallback, useState } from 'react';
import styles from './Form.module.css';
import InputField from './InputField';

const Form = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [cnic, setCnic] = useState('');
    const [email, setEmail] = useState('');
    const [contactno, setContactno] = useState('');
    const [address, setAddress] = useState('');

    const handleFirstname = useCallback(e => {
        setFirstname(e.target.value);
    }, []);
    const handleLastname = useCallback(e => {
        setLastname(e.target.value);
    }, []);
    const handleCnic = useCallback(e => {
        setCnic(e.target.value);
    }, []);
    const handleEmail = useCallback(e => {
        setEmail(e.target.value);
    }, []);
    const handleContactno = useCallback(e => {
        setContactno(e.target.value);
    }, []);
    const handleAddress = useCallback(e => {
        setAddress(e.target.value);
    }, []);

    async function onSubmit(event){
        event.preventDefault();

        const formdata = {
            firstName: firstname,
            lastName: lastname,
            cnic: cnic,
            email: email,
            contactno: contactno,
            address: address
        }
        console.log(JSON.stringify(formdata));
        alert('submitted');

    }

    return(
        <>
            <div className={styles.mainContainer}>
                <div>
                    <h1 className={styles.heading}>Dummy Form</h1>
                </div>
                <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={onSubmit}>
                    <div className={styles.form_row}>
                        <div className={styles.form_column}>
                            <div className={styles.row}>
                                <div className={styles.column}>
                                    <label>First Name:</label>
                                    <InputField value={firstname} handler={handleFirstname} type="text" placeholderText="First Name" stylename={styles.input} ></InputField>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.column}>
                                    <label>Last Name:</label>
                                    <InputField value={lastname} handler={handleLastname} placeholderText="Last Name" stylename={styles.input}/>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.column}>
                                    <label>CNIC:</label>
                                    <InputField value={cnic} handler={handleCnic} type="text" placeholderText="CNIC" stylename={styles.input}></InputField>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.column}>
                                    <label>Email:</label>
                                    <InputField value={email} handler={handleEmail} type="text" placeholderText="Email" stylename={styles.input}></InputField>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.column}>
                                    <label>Contact No:</label>
                                    <InputField value={contactno} handler={handleContactno} type="text" placeholderText="Contact No" stylename={styles.input}></InputField>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.column}>
                                    <label>Address:</label>
                                    <InputField value={address} handler={handleAddress} type="text" placeholderText="Address" stylename={styles.input}></InputField>
                                </div>
                            </div>
                            <div className={styles.btn}>
                                <button className={styles.button} type="submit">Submit</button>

                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </>
    );
}

export default Form;