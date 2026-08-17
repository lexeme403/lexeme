import "../../styling/games/WordSearchPuzzle.css";
import React, { useEffect, useState } from "react";

function WordSearchPuzzle({ game }) {
    const [selection, setSelection] = useState([]);
    const [foundWords, setFoundWords] = useState([]);
    const [foundWordColors, setFoundWordColors] = useState({});
    const [isPortrait, setIsPortrait] = useState(false);

    const grid = game.grid;
    const answers = game.answers;

    // -----------------------------------------
    // Check device orientation
    // -----------------------------------------

    useEffect(() => {
        const checkOrientation = () => {
            const mobile =
                window.innerWidth < 768;

            const portrait =
                window.innerHeight > window.innerWidth;

            setIsPortrait(
                mobile && portrait
            );
        };

        checkOrientation();

        window.addEventListener(
            "resize",
            checkOrientation
        );

        window.addEventListener(
            "orientationchange",
            checkOrientation
        );

        return () => {
            window.removeEventListener(
                "resize",
                checkOrientation
            );

            window.removeEventListener(
                "orientationchange",
                checkOrientation
            );
        };
    }, []);

    // -----------------------------------------
    // Start selecting
    // -----------------------------------------

    const handlePointerDown = (
        event,
        row,
        col
    ) => {
        event.currentTarget.setPointerCapture(
            event.pointerId
        );

        setSelection([
            {
                row,
                col
            }
        ]);
    };

    // -----------------------------------------
    // Handle pointer movement
    // -----------------------------------------

    const handlePointerMove = (event) => {
        if (selection.length === 0) {
            return;
        }

        const element =
            document.elementFromPoint(
                event.clientX,
                event.clientY
            );

        if (!element) {
            return;
        }

        const cell =
            element.closest(
                ".word-search-cell"
            );

        if (!cell) {
            return;
        }

        const row = Number(
            cell.dataset.row
        );

        const col = Number(
            cell.dataset.col
        );

        handlePointerEnter(row, col);
    };

    // -----------------------------------------
    // Continue selecting
    // -----------------------------------------

    const handlePointerEnter = (
        row,
        col
    ) => {
        if (selection.length === 0) {
            return;
        }

        const start = selection[0];

        const newSelection =
            getCellsBetween(
                start.row,
                start.col,
                row,
                col
            );

        setSelection(newSelection);
    };

    // -----------------------------------------
    // Finish selection
    // -----------------------------------------

    const handlePointerUp = () => {
        if (selection.length >= 2) {
            const selectedWord =
                selection
                    .map(
                        cell =>
                            grid[
                            cell.row
                            ][
                            cell.col
                            ]
                    )
                    .join("");

            checkAnswer(selectedWord);
        }

        setSelection([]);
    };

    // -----------------------------------------
    // Get cells between two points
    // -----------------------------------------

    const getCellsBetween = (
        startRow,
        startCol,
        endRow,
        endCol
    ) => {
        const rowDiff =
            endRow - startRow;

        const colDiff =
            endCol - startCol;

        if (
            rowDiff !== 0 &&
            colDiff !== 0 &&
            Math.abs(rowDiff) !==
            Math.abs(colDiff)
        ) {
            return [
                {
                    row: startRow,
                    col: startCol
                }
            ];
        }

        const rowStep =
            Math.sign(rowDiff);

        const colStep =
            Math.sign(colDiff);

        const length = Math.max(
            Math.abs(rowDiff),
            Math.abs(colDiff)
        );

        const cells = [];

        for (
            let i = 0;
            i <= length;
            i++
        ) {
            cells.push({
                row:
                    startRow +
                    i * rowStep,

                col:
                    startCol +
                    i * colStep
            });
        }

        return cells;
    };

    // -----------------------------------------
    // Check selected word
    // -----------------------------------------

    const checkAnswer = (
        selectedWord
    ) => {
        const normalizedSelectedWord =
            normalizeWord(
                selectedWord
            );

        const answer =
            answers.find(
                answer => {
                    const normalizedAnswer =
                        normalizeWord(
                            answer.word
                        );

                    const reversedAnswer =
                        normalizedAnswer
                            .split("")
                            .reverse()
                            .join("");

                    return (
                        normalizedSelectedWord ===
                        normalizedAnswer ||
                        normalizedSelectedWord ===
                        reversedAnswer
                    );
                }
            );

        if (!answer) {
            return;
        }

        if (
            foundWords.includes(
                answer.word
            )
        ) {
            return;
        }

        const randomColor =
            getRandomColor();

        setFoundWords(prev => [
            ...prev,
            answer.word
        ]);

        setFoundWordColors(
            prev => ({
                ...prev,
                [answer.word]:
                    randomColor
            })
        );
    };

    // -----------------------------------------
    // Normalize word
    // -----------------------------------------

    const normalizeWord = (
        word
    ) => {
        return word
            .replace(/\s+/g, "")
            .toUpperCase();
    };

    // -----------------------------------------
    // Generate random color
    // -----------------------------------------

    const getRandomColor = () => {
        const colors = [
            "#ef4444",
            "#f97316",
            "#eab308",
            "#22c55e",
            "#06b6d4",
            "#3b82f6",
            "#8b5cf6",
            "#ec4899",
            "#14b8a6",
            "#f43f5e"
        ];

        return colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];
    };

    // -----------------------------------------
    // Is cell currently selected?
    // -----------------------------------------

    const isSelected = (
        row,
        col
    ) => {
        return selection.some(
            cell =>
                cell.row === row &&
                cell.col === col
        );
    };

    // -----------------------------------------
    // Is cell part of found word?
    // -----------------------------------------

    const isPartOfFoundWord = (
        row,
        col
    ) => {
        return answers.some(
            answer => {
                if (
                    !foundWords.includes(
                        answer.word
                    )
                ) {
                    return false;
                }

                const startRow =
                    answer.start.row -
                    1;

                const startCol =
                    answer.start.col -
                    1;

                const endRow =
                    answer.end.row -
                    1;

                const endCol =
                    answer.end.col -
                    1;

                const cells =
                    getCellsBetween(
                        startRow,
                        startCol,
                        endRow,
                        endCol
                    );

                return cells.some(
                    cell =>
                        cell.row === row &&
                        cell.col === col
                );
            }
        );
    };

    // -----------------------------------------
    // Render found word highlighters
    // -----------------------------------------

    const renderFoundWordLines = () => {
        return answers.map(
            answer => {
                if (
                    !foundWords.includes(
                        answer.word
                    )
                ) {
                    return null;
                }

                const startRow =
                    answer.start.row -
                    1;

                const startCol =
                    answer.start.col -
                    1;

                const endRow =
                    answer.end.row -
                    1;

                const endCol =
                    answer.end.col -
                    1;

                const color =
                    foundWordColors[
                    answer.word
                    ];

                if (!color) {
                    return null;
                }

                return (
                    <line
                        key={
                            answer.word
                        }
                        x1={
                            startCol + 0.5
                        }
                        y1={
                            startRow + 0.5
                        }
                        x2={
                            endCol + 0.5
                        }
                        y2={
                            endRow + 0.5
                        }
                        stroke={color}
                        strokeWidth="0.65"
                        strokeOpacity="0.2"
                        strokeLinecap="round"
                    />
                );
            }
        );
    };

    // -----------------------------------------
    // Portrait mobile message
    // -----------------------------------------

    if (isPortrait) {
        return (
            <div className="word-search-orientation-message">

                <div className="orientation-icon">
                    📱
                </div>

                <h2>
                    Rotate Your Device
                </h2>

                <p>
                    For a better experience,
                    please rotate your device
                    to landscape mode.
                </p>

                <div className="orientation-arrow">
                    ↻
                </div>

            </div>
        );
    }

    // -----------------------------------------
    // Render game
    // -----------------------------------------

    return (
        <div
            className="word-search-puzzle"
            onPointerUp={
                handlePointerUp
            }
            onPointerCancel={
                handlePointerUp
            }
        >

            <div className="word-search-board">

                <div className="word-search-grid">

                    {grid.map(
                        (row, rowIndex) => (

                            <div
                                className="word-search-row"
                                key={rowIndex}
                            >

                                {row.map(
                                    (
                                        letter,
                                        colIndex
                                    ) => {

                                        const selected =
                                            isSelected(
                                                rowIndex,
                                                colIndex
                                            );

                                        const found =
                                            isPartOfFoundWord(
                                                rowIndex,
                                                colIndex
                                            );

                                        return (
                                            <div
                                                key={`${rowIndex}-${colIndex}`}
                                                className={`
                                                    word-search-cell
                                                    ${selected
                                                        ? "selected"
                                                        : ""
                                                    }
                                                    ${found
                                                        ? "found"
                                                        : ""
                                                    }
                                                `}
                                                data-row={
                                                    rowIndex
                                                }
                                                data-col={
                                                    colIndex
                                                }
                                                onPointerDown={
                                                    event =>
                                                        handlePointerDown(
                                                            event,
                                                            rowIndex,
                                                            colIndex
                                                        )
                                                }
                                                onPointerMove={
                                                    handlePointerMove
                                                }
                                            >
                                                <span className="word-search-letter">
                                                    {letter}
                                                </span>
                                            </div>
                                        );
                                    }
                                )}

                            </div>
                        )
                    )}

                </div>

                <svg
                    className="word-search-highlighter"
                    viewBox={`0 0 ${grid[0].length} ${grid.length}`}
                    preserveAspectRatio="none"
                >
                    {renderFoundWordLines()}
                </svg>

            </div>

            <div className="word-search-word-list">
                <div className="eyebrow">BY {game.gameCreator}</div>
                <h3>
                    Find These Words
                </h3>

                {answers.map(
                    answer => (

                        <div
                            key={
                                answer.word
                            }
                            className={`
                                word-search-answer
                                ${foundWords.includes(
                                answer.word
                            )
                                    ? "found"
                                    : ""
                                }
                            `}
                        >
                            {
                                answer.word
                            }
                        </div>
                    )
                )}

            </div>

        </div>
    );
}

export default WordSearchPuzzle;