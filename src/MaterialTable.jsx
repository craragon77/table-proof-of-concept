import React from 'react';
import test_data from './test-data.json';
import { AddBox, ArrowDownward } from "@material-ui/core/Icon";
import MaterialTable from 'material-table';



export default function Material_Table(){
    return(
        <> 
            <MaterialTable 
                columns = {[
                    {title: 'Practice Concern', field: 'practname'},
                    {title: 'Study Count', field: 'studycount'}
                ]}
                data={test_data.get_practicelist}
            />
        </>
        
    )
}