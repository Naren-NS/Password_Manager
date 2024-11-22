import React, { useEffect } from 'react';
import BasicModal from './Modal';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const navigateToGenerate = () => {
        navigate('/generate');
    };

    const [open, setOpen] = React.useState(false);
    const [domainlist, setdomainlist] = React.useState([]);
    const [editDomain, setEditDomain] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = async () => {
        setOpen(false);
        getdomainpwds();
    };

    useEffect(() => {
        getdomainpwds();
    }, []);

    const getdomainpwds = async () => {
        try {
            const result = await axios.get("http://localhost:3004/users/getdp");
            console.log(result);
            setdomainlist(result.data);
        } catch (e) {
            console.log(e);
        }
    };

    const deletePassword = async (id) => {
        try {
            await axios.delete(`http://localhost:3004/users/dp/${id}`);
            alert(`Entry deleted successfully!`);
            setdomainlist((prevList) => prevList.filter((item) => item._id !== id));
        } catch (e) {
            console.error(e);
            alert(`Failed to delete entry`);
        }
    };
    
    const updatePassword = async () => {
        if (editDomain && newPassword) {
            try {
                const id = domainlist.find((item) => item.domain === editDomain)._id;
                await axios.put(`http://localhost:3004/users/dp/${id}`, {
                    password: newPassword,
                });
                alert(`${editDomain} updated successfully!`);
                setdomainlist((prevList) =>
                    prevList.map((item) =>
                        item._id === id ? { ...item, password: newPassword } : item
                    )
                ); // Update in UI
                setEditDomain('');
                setNewPassword('');
            } catch (e) {
                console.error(e);
                alert(`Failed to update ${editDomain}`);
            }
        }
    };
    

    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    <h1 className="text-center">Enter your Passwords</h1>
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-column w-50">
                        <div className="row justify-content-center align-items-center">
                            <div className="card-main">
                                <div className="username-password">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>DOMAIN</th>
                                                <th>PASSWORD</th>
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {domainlist.map((val) => (
                                                <tr key={val._id}>
                                                    <td>{val.domain}</td>
                                                    <td>{val.password}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => deletePassword(val._id)}
                                                            className="btn btn-danger btn-sm"
                                                        >
                                                            Delete
                                                        </button>
                                                        <button
                                                            onClick={() => setEditDomain(val.domain)}
                                                            className="btn btn-warning btn-sm ml-2"
                                                        >
                                                            Update
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                </div>

                                {editDomain && (
                                    <div className="update-section">
                                        <h5>Update Password for: {editDomain}</h5>
                                        <input
                                            type="text"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            placeholder="Enter new password"
                                            className="form-control mb-2"
                                        />
                                        <button onClick={updatePassword} className="btn btn-success">
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setEditDomain('')}
                                            className="btn btn-secondary ml-2"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}

                                <BasicModal open={open} handleClose={handleClose} />
                                <button
                                    onClick={handleOpen}
                                    className="btn btn-primary btn-lg mt-3"
                                >
                                    Add
                                </button>
                                <p> </p>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    onClick={navigateToGenerate}
                                >
                                    Generate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
