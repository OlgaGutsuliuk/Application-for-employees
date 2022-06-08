import React from "react";
const AppFilter = ({ filter }) => {
  const btn = [
    {
      name: "all",
      label: " Все сотрудники"
    },
    {
      name: "rise",
      label: " На повышение"
    },
    {
      name: "salery",
      label: " З/П больше 1000$"
    }
  ];
  return (
    <div className='btn-group' role='group' aria-label='Basic outlined example'>
      {btn.map(({ name, label }) => (
        <button type='button' className='btn btn-outline-light ' key={name} onClick={()=>filter(name)}>
          {label}
        </button>
      ))}
      {/* <button type='button' className='btn btn-outline-light '>
        Все сотрудники
      </button>
      <button type='button' className='btn btn-outline-light'>
        На повышение
      </button>
      <button type='button' className='btn btn-outline-light'>
        З/П больше 1000$
      </button> */}
    </div>
  );
};

export default AppFilter;
