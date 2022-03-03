import { useDispatch, useSelector } from 'react-redux';
import './Applications.scss';
import Application from './Apllication'
import { deleteApplication, deleteApplicationFront, fetchApplications } from '../../../slices/applicationsSlice';



const Applications = () => {
    const dispatch = useDispatch()
    const applications = useSelector(state => state.applications.applications)
    const handleDelete = (id) => {
        dispatch(deleteApplication(id))
        dispatch(deleteApplicationFront(id))
        console.log(id);
    }
 
    return (
        <div className='main'>
            <h1>Заявки на обратный звонок</h1>
            <div className='item-request'>
            {
                applications &&
                applications.map(application => (
                    <Application key={application.id} {...application} handleDelete={handleDelete}/>
                ))
            }

            </div>
            
        </div>
    );
};

export default Applications;