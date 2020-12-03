	const a_text = document.getElementById('a_text');
	const b_text = document.getElementById('b_text');
	const c_text = document.getElementById('c_text');
	const d_text = document.getElementById('d_text');
	const questionDOM = document.getElementById('question');
	const ul = document.getElementById('ul');
	const small = document.getElementById('small');
	const submit = document.getElementById('getAns');
	const answers = document.querySelectorAll('.answer');

	function deSelected() {
		answers.forEach((item) => (item.checked = false));
	}
	const allQuestions = [
		{
			question: 'Who is founder of Google ?',
			a: 'Steve Jobs',
			b: 'Larry Page',
			c: 'Jeff Bezos',
			d: 'Bill Gates',
			correct: 'b',
		},
		{
			question: 'Who is founder of Microsoft ?',
			a: 'Larry Page',
			b: 'Steve Jobs',
			c: 'Jeff Bezos',
			d: 'Bill Gates',
			correct: 'd',
		},
		{
			question: 'Who is founder of Amazon ?',
			a: 'Steve Jobs',
			b: 'Bill Gates',
			c: 'Jeff Bezos',
			d: 'Larry Page',
			correct: 'c',
		},
		{
			question: 'Who is founder of Apple ?',
			a: 'Larry Page',
			b: 'Steve Jobs',
			c: 'Jeff Bezos',
			d: 'Bill Gates',
			correct: 'b',
		},
	];
	let changeIndex = 0;
	let score = 0;
	loadQuiz();
	function loadQuiz() {
		const getQuestion = allQuestions[changeIndex];
		questionDOM.innerHTML = `<span class="autoWriteBreak 50"> ${getQuestion.question} </span>`;
		a_text.innerHTML = getQuestion.a;
		b_text.innerHTML = getQuestion.b;
		c_text.innerHTML = getQuestion.c;
		d_text.innerHTML = getQuestion.d;
	}  
	function getAnswer() {
		let result;
		answers.forEach((answer) => {
			if (answer.checked) {
				result = answer.id;
			}
		});
		return result;
	}
	submit.addEventListener('click', () => {
		const ans = getAnswer();
		if (ans) {
			if (ans === allQuestions[changeIndex].correct) {
				score++;
			}
			changeIndex++;
			if (changeIndex < allQuestions.length) {
				loadQuiz();
			} else {
				ul.style.display = 'none';
				small.style.opacity = '0';
				submit.innerText = `Reload`;
				submit.setAttribute('onclick', 'location.reload()');
				questionDOM.innerHTML = ` <span style='color:green' >You answerd correctly at ${score} / ${allQuestions.length} questions.</span> `;
			}
		}
		deSelected();
	}); 