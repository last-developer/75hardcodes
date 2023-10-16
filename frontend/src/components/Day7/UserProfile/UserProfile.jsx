import React, { useState } from 'react';
import './UserProfile.css';
import testuser1 from './testuser1.jpg'

export default function UserProfile() {
    // Replace these states with your own global states, like recoil/redux global states
    const [user, setUser] = useState({
        name: 'Emily S.',
        email: 'emilysarah@gmail.com',
        profilePicture: testuser1,
    });

    const [isEditing, setIsEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({ ...user });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setUser({ ...updatedUser });
        setIsEditing(false);
    };

    return (
        <section className="user-profile-container">
            <h1 className="user-profile-header">User Profile</h1>
            <div className="user-profile-details">
                <div className="user-profile-picture">
                    <img src={user.profilePicture} alt="Profile" />
                </div>
                {isEditing ? (
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
                ) : (
                    <div className="user-profile-info">
                        <h2>{user.name}</h2>
                        <p style={{margin:'10px 0'}}>{user.email}</p>
                        <button onClick={handleEditClick}>Edit</button>
                    </div>
                )}
            </div>
        </section>
    );
}
