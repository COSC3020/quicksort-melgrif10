[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12562098&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

This worst-case for this implementation of quicksort would be if every partition had 0 or 1 elements. Since the pivot is chosen as the last element, it can fall into the worst case scenario. In this case the program would make n-1 comparisons for every partition. Using this information a total sum can be derived. 

$\sum_{i=1}^{n-1} i=(n-1)(n-2)/2$

This tells us that the worst case is that we would have $\varTheta(n^2)$ comparisons. Therefore the time complexity would equal $\varTheta(n^2)$.
