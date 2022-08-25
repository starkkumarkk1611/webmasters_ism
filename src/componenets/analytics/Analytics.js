import React from 'react';
import "./analytics.css";
import Button from 'react-bootstrap/Button';
import Chart from './Chart';
export default function Analytics() {
    return (
        <>
            <Chart />
<div class="col-lg-6">
    
    <div class="card card-flush h-lg-100">
        
        <div class=" mt-6">
            
            <div class="card-title headFlx flex-column">
                <h3 class="fw-bolder mb-1">Analytics</h3>
            </div>
            
            
        </div>
        
        
        <div class="card-body p-9 pt-4">
                
                <div id="kt_schedule_day_9" class="tab-pane fade show">
                    
                    
                    
                    
                <div class="d-flex flex-stack position-relative mt-8">
                        
                        <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                        
                        
                        <div class="fw-bold ms-5 text-gray-600 flx">
                        <div class="vl"></div>
                        <div className='flxCol'>
                            <div class="fs-5">14:30 pm</div>
                            <div>
                            <h5>Creative Content Initiative</h5>
                            </div>
                            </div>
                        </div>
                        
                        
                        <Button className='btnFlx' variant="outline-primary">Visit</Button>
                        
                    </div>
                    
                    
                    
                    
                </div>
                
            </div>
            
        </div>
        
    </div>

        </>
    )

}


/*
import Button from 'react-bootstrap/Button';

function TypesExample() {
  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </>
  );
}

export default TypesExample;
*/