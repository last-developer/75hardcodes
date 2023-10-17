import React, { useState } from 'react';
import './UserProfile.css';
import testuser1 from './testuser1.jpg';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: 'Emily S.',
        email: 'emilysarah@gmail.com',
    });

    const [profilePicture, setProfilePicture] = useState(testuser1);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({ ...user });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setUser({ ...updatedUser });
        setIsEditing(false);
    };

    const handleDeleteAccount = () => {
        // Implement account deletion logic here.
        // After deletion, navigate the user to the login page.
        navigate('/login');
    };

    const handleProfilePictureChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePicture(e.target.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <section className="user-profile-container">
            <h1 className="user-profile-header">User Profile</h1>
            <div className="user-profile-details">
                {isEditing ? (
                    <>
                        <div className="user-profile-picture-edit">
                            <label htmlFor="profile-picture-upload">
                                <img
                                    src={profilePicture}
                                    alt="Profile"
                                />
                                <div className="profile-picture-edit-icon" onClick={handleProfilePictureChange}>
                                    <span role="img" aria-label="edit">
                                        ✏️
                                    </span>
                                </div>
                            </label>
                            <input
                                type="file"
                                id="profile-picture-upload"
                                accept="image/*"
                                onChange={handleProfilePictureChange}
                                style={{ display: 'none' }}
                            />
                        </div>
                        <div className="user-profile-edit">
                            <input
                                type="text"
                                placeholder="Name"
                                value={updatedUser.name}
                                onChange={(e) =>
                                    setUpdatedUser({ ...updatedUser, name: e.target.value })
                                }
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={updatedUser.email}
                                onChange={(e) =>
                                    setUpdatedUser({ ...updatedUser, email: e.target.value })
                                }
                            />
                            <button onClick={handleSaveClick}>Save</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="user-profile-picture">
                            <img
                                src={profilePicture}
                                alt="Profile"
                            />
                        </div>
                        <div className="user-profile-info">
                            <h2>{user.name}</h2>
                            <p style={{ margin: '10px 0' }}>{user.email}</p>
                            <button onClick={handleEditClick}>Edit</button>
                            <br />
                            <button onClick={handleDeleteAccount} className="delete-account-button">
                                Delete Account
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
