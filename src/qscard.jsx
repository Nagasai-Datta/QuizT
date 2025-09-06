import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ques from './questions.js';
import Box from '@mui/material/Box';
export default function QsCard({ category }) {
    const questions = ques[category];
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const [score, setScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);
    const options = questions[count].options;

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if the selected answer is correct
        const isCorrect = value === options[questions[count].correctAnswers];

        // Update the score if the answer is correct
        if (isCorrect) {
            // Use the functional update form to ensure you're using the latest score
            setScore(prevScore => prevScore + 1);
        }

        // Check if this is the last question
        const isLastQuestion = count === questions.length - 1;

        if (isLastQuestion) {
            // If it's the last question, just complete the quiz.
            // The final score update has already been queued above.
            setQuizComplete(true);
        } else {
            // If not the last question, move to the next one.
            setCount(prevCount => prevCount + 1);
            setValue(''); // Reset the selected option for the next question
        }
    };

    return (
        !quizComplete ? (
            <Box
  sx={{
    display: 'flex',          // make it a flex container
    justifyContent: 'center', // horizontal center
    alignItems: 'center',     // vertical center
    height: '100vh', 
    width: '100vw',          // full viewport height
  }}
>
            <Card variant="outlined" sx={{ maxWidth: 400,  p: 2 }} className="card">
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {questions[count].question}
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ mt: 2 }} variant="standard" fullWidth>
                            <RadioGroup
                                value={value}
                                onChange={handleRadioChange}
                            >
                                {options.map((item, idx) => (
                                    <FormControlLabel 
                                        key={idx} 
                                        value={item} 
                                        control={<Radio />} 
                                        label={item} 
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>

                        <CardActions sx={{ justifyContent: 'center', mt: 2, gap: 1 }}>
                            <Button type="submit" variant="contained" color="primary" disabled={!value}>
                                {count === questions.length - 1 ? 'Finish Quiz' : 'Submit & Next'}
                            </Button>
                        </CardActions>
                    </form>
                </CardContent>
            </Card>
            </Box>
        ) : (
                      <Box
  sx={{
    display: 'flex',          // make it a flex container
    justifyContent: 'center', // horizontal center
    alignItems: 'center',     // vertical center
    height: '100vh', 
    width: '100vw',          // full viewport height
  }}
>
            <Card sx={{ maxWidth: 400,p: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Quiz Completed!
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Your score: {score} out of {questions.length}
                    </Typography>
                    <Button
                    variant="contained" 
                    color="secondary" 
                    onClick={() => window.location.reload()}
                     >
                        Return to home
                    </Button>

                </CardContent>
            </Card>
            </Box>
        )
    );
}