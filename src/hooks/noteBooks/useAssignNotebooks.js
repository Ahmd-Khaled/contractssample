import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../notify/useNotification';
import { useEffect } from 'react';
import { assignNotebooks } from '../../redux/thunkActions/noteBooksActions';

const useAssignNotebooks = (assignedSuper, assignedNotebooks) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const assignNoteBookHandler = async () => {
    // const notebookList = assignedNotebooks;
    // const formData = new FormData()
    // formData.append('notebookList', notebookList)

    const data = {
      supervisor_id: assignedSuper.value,
      notebook_ids: JSON.stringify(assignedNotebooks)
    }
    console.log("$$$$$$$$$$$$$$$$$$$$++++++++++++++++++ Assign to Super Data: ", data)
    setLoading(true);
    await dispatch(assignNotebooks(data));
    setLoading(false);
  }

  const { assignNotebooksRes, isLoading, error } = useSelector(state => state.noteBooksSlice);
  
  
  console.log("_______(assignNotebooksRes)__________:", assignNotebooksRes);
  if (!loading) {
    if (assignNotebooksRes) {
      if (assignNotebooksRes.status) {
        notify(assignNotebooksRes.message, "success")
        setTimeout(() => {
          navigate("/all-notebooks")
        }, 1500);
      } else {
        notify(assignNotebooksRes.message, "error")
      }
    }
  }

  // assignNotebooks
  return [assignNoteBookHandler, isLoading, error]
}

export default useAssignNotebooks