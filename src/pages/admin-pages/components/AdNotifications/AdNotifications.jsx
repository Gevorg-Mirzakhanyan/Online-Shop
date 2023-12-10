import { useEffect, useState } from "react";
import AdHeader from "../../../../components/adHeader/AdHeader";
import { getNotificationsList } from "../../../../platform/api/notifications-api";
import "./AdNotifications.scss"

const AdNotification = () => {
    const [notificationsForm, setNotificationsForm] = useState([])

    useEffect(() => {
        getNotifications()
    }, [])

    const getNotifications = async () => {
        const result = await getNotificationsList()
        if (result.data) {
            setNotificationsForm(result.data)
        }
    };


    return (
        <div>
            <AdHeader title='Notifications' />
            <div className="notification-section">
                {notificationsForm.length ? (
                    <div>
                        {notificationsForm.map((item, index) => {
                            return (
                                <div className="notification-box">
                                    <p><b className="notification-info">Name:</b>{item.name}</p>
                                    <p><b className="notification-info">Email:</b>{item.email}</p>
                                    <p><b className="notification-info">Subject:</b>{item.subject}</p>
                                    <p><b className="notification-info">Message:</b>{item.message}</p>
                                </div>

                            )
                        })}
                    </div>
                ) : null}

            </div>
        </div>
    )
}

export default AdNotification;