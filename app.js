const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');
// If the user typed in 'update', prompt them for a patient name,  prompt them for a new name, update the name to the new name, and display the list. 
if (command === 'update')
{
  const patient = prompt('Please provide patient name you would like to replace: ');
  const index = patientList.indexOf(patient);
  if (index === -1)
  {
    alert('This is not a current patient on the list. Please hit refresh to try again');
  }
  else
  {
    const newName = prompt('Please provide name of new patient: ');
    if (newName)
    {
      patientList[index] = newName;
      alert('Patient list after replacement ' + patientList);
    }
    else
      alert('Invalid entry for new patient name. Please hit refresh to try again.');
  }
  
}
// If the user typed in 'delete', prompt them for a patient name, delete that patient, and display the list.
else if (command === 'delete')
{ 
  const patient = prompt('Please provide patient name you would like to delete: ');
  const index = patientList.indexOf(patient);
  if (index === -1)
  {
    alert('This is not a current patient on the list. Please hit refresh to try again');
  }
  else
  {
    patientList.splice(index, 1);
    alert('Patient list after deletion ' + patientList);
  }
}
// If the user typed in 'add', prompt them for a patient name, add that patient to the list, and display the list. 
else if (command === 'add')
{
  const patient = prompt('Please provide patient name to add: ');
  if (patient)
  {
    patientList.push(patient);
    alert('Patient list after adding: ' + patientList);
  }
  else
  {
    alert('Invalid entry. Please hit refresh try again');
  }
}
// If the user typed in 'reorder', prompt them for a patient name, prompt them for another patient name, switch the two entered patients, and display the list.
else if (command === 'reorder')
{
  const patient1 = prompt('Please provide name of patient 1: ');
  const index1 = patientList.indexOf(patient1);
  const patient2 = prompt('Please provide name of patient 2: ');
  const index2 = patientList.indexOf(patient2);
  if ((index1 === -1) || (index2 === -1))
  {
    alert('One or both patient names was incorrect. Please refresh to try again.'); 
  } 
  else
  {
    patientList.splice(index1, 1, patient2);
    patientList.splice(index2, 1, patient1);
    alert('Patient list after swap: ' + patientList);
  }
}
else
{
  alert('Incorrect entry. Please hit refresh to try again.')
}