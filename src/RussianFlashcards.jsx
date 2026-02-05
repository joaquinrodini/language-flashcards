import React, { useState, useEffect } from 'react';

export default function RussianFlashcards() {
  const allCards = {
    a1: [
      { russian: 'привет', english: 'hello', difficulty: 'easy' },
      { russian: 'спасибо', english: 'thank you', difficulty: 'easy' },
      { russian: 'пожалуйста', english: 'please', difficulty: 'easy' },
      { russian: 'да', english: 'yes', difficulty: 'easy' },
      { russian: 'нет', english: 'no', difficulty: 'easy' },
      { russian: 'доброе утро', english: 'good morning', difficulty: 'easy' },
      { russian: 'спокойной ночи', english: 'good night', difficulty: 'average' },
      { russian: 'как дела?', english: 'how are you?', difficulty: 'average' },
      { russian: 'меня зовут', english: 'my name is', difficulty: 'average' },
      { russian: 'рад познакомиться', english: 'nice to meet you', difficulty: 'hard' },
      { russian: 'вода', english: 'water', difficulty: 'easy' },
      { russian: 'хлеб', english: 'bread', difficulty: 'easy' },
      { russian: 'я', english: 'I', difficulty: 'easy' },
      { russian: 'ты', english: 'you', difficulty: 'easy' },
      { russian: 'он', english: 'he', difficulty: 'easy' },
      { russian: 'она', english: 'she', difficulty: 'easy' },
      { russian: 'где ванная?', english: 'where is the bathroom?', difficulty: 'hard' },
      { russian: 'сколько это стоит?', english: 'how much does it cost?', difficulty: 'hard' },
      { russian: 'я не понимаю', english: 'I don\'t understand', difficulty: 'average' },
      { russian: 'извините', english: 'excuse me', difficulty: 'average' },
      { russian: 'молоко', english: 'milk', difficulty: 'easy' },
      { russian: 'яйцо', english: 'egg', difficulty: 'easy' },
      { russian: 'сыр', english: 'cheese', difficulty: 'easy' },
      { russian: 'масло', english: 'butter', difficulty: 'easy' },
      { russian: 'мясо', english: 'meat', difficulty: 'easy' },
      { russian: 'рыба', english: 'fish', difficulty: 'easy' },
      { russian: 'овощи', english: 'vegetables', difficulty: 'average' },
      { russian: 'фрукты', english: 'fruits', difficulty: 'average' },
      { russian: 'напиток', english: 'drink', difficulty: 'average' },
      { russian: 'кофе', english: 'coffee', difficulty: 'easy' },
      { russian: 'чай', english: 'tea', difficulty: 'easy' },
      { russian: 'сок', english: 'juice', difficulty: 'easy' },
      { russian: 'пиво', english: 'beer', difficulty: 'average' },
      { russian: 'вино', english: 'wine', difficulty: 'average' },
      { russian: 'горячий', english: 'hot', difficulty: 'average' },
      { russian: 'холодный', english: 'cold', difficulty: 'average' },
      { russian: 'вкусный', english: 'delicious', difficulty: 'average' },
      { russian: 'большой', english: 'big', difficulty: 'easy' },
      { russian: 'маленький', english: 'small', difficulty: 'easy' },
      { russian: 'хороший', english: 'good', difficulty: 'easy' },
      { russian: 'плохой', english: 'bad', difficulty: 'easy' },
      { russian: 'дорогой', english: 'expensive', difficulty: 'average' },
      { russian: 'дешевый', english: 'cheap', difficulty: 'average' },
      { russian: 'новый', english: 'new', difficulty: 'easy' },
      { russian: 'старый', english: 'old', difficulty: 'easy' },
      { russian: 'красный', english: 'red', difficulty: 'average' },
      { russian: 'синий', english: 'blue', difficulty: 'average' },
      { russian: 'зеленый', english: 'green', difficulty: 'average' },
      { russian: 'желтый', english: 'yellow', difficulty: 'average' },
      { russian: 'черный', english: 'black', difficulty: 'average' },
      { russian: 'белый', english: 'white', difficulty: 'average' },
    ],
    a2: [
      { russian: 'работа', english: 'work', difficulty: 'easy' },
      { russian: 'семья', english: 'family', difficulty: 'easy' },
      { russian: 'друг', english: 'friend', difficulty: 'easy' },
      { russian: 'дом', english: 'house', difficulty: 'easy' },
      { russian: 'город', english: 'city', difficulty: 'easy' },
      { russian: 'улица', english: 'street', difficulty: 'average' },
      { russian: 'машина', english: 'car', difficulty: 'easy' },
      { russian: 'книга', english: 'book', difficulty: 'easy' },
      { russian: 'время', english: 'time', difficulty: 'average' },
      { russian: 'день', english: 'day', difficulty: 'easy' },
      { russian: 'неделя', english: 'week', difficulty: 'average' },
      { russian: 'месяц', english: 'month', difficulty: 'average' },
      { russian: 'год', english: 'year', difficulty: 'easy' },
      { russian: 'погода', english: 'weather', difficulty: 'average' },
      { russian: 'холодно', english: 'cold', difficulty: 'average' },
      { russian: 'жарко', english: 'hot', difficulty: 'average' },
      { russian: 'я хочу', english: 'I want', difficulty: 'average' },
      { russian: 'я люблю', english: 'I love', difficulty: 'average' },
      { russian: 'помните меня?', english: 'do you remember me?', difficulty: 'hard' },
      { russian: 'что вы делаете?', english: 'what are you doing?', difficulty: 'hard' },
      { russian: 'школа', english: 'school', difficulty: 'easy' },
      { russian: 'университет', english: 'university', difficulty: 'average' },
      { russian: 'студент', english: 'student', difficulty: 'easy' },
      { russian: 'учитель', english: 'teacher', difficulty: 'easy' },
      { russian: 'урок', english: 'lesson', difficulty: 'easy' },
      { russian: 'экзамен', english: 'exam', difficulty: 'average' },
      { russian: 'оценка', english: 'grade', difficulty: 'average' },
      { russian: 'спорт', english: 'sport', difficulty: 'easy' },
      { russian: 'футбол', english: 'football', difficulty: 'easy' },
      { russian: 'теннис', english: 'tennis', difficulty: 'easy' },
      { russian: 'плавание', english: 'swimming', difficulty: 'average' },
      { russian: 'музыка', english: 'music', difficulty: 'easy' },
      { russian: 'фильм', english: 'film', difficulty: 'easy' },
      { russian: 'театр', english: 'theater', difficulty: 'average' },
      { russian: 'кино', english: 'cinema', difficulty: 'easy' },
      { russian: 'искусство', english: 'art', difficulty: 'average' },
      { russian: 'картина', english: 'painting', difficulty: 'average' },
      { russian: 'родители', english: 'parents', difficulty: 'easy' },
      { russian: 'брат', english: 'brother', difficulty: 'easy' },
      { russian: 'сестра', english: 'sister', difficulty: 'easy' },
      { russian: 'бабушка', english: 'grandmother', difficulty: 'easy' },
      { russian: 'дедушка', english: 'grandfather', difficulty: 'easy' },
      { russian: 'жена', english: 'wife', difficulty: 'average' },
      { russian: 'муж', english: 'husband', difficulty: 'average' },
      { russian: 'ребенок', english: 'child', difficulty: 'average' },
      { russian: 'девочка', english: 'girl', difficulty: 'easy' },
      { russian: 'мальчик', english: 'boy', difficulty: 'easy' },
      { russian: 'мать', english: 'mother', difficulty: 'easy' },
      { russian: 'отец', english: 'father', difficulty: 'easy' },
      { russian: 'кухня', english: 'kitchen', difficulty: 'easy' },
      { russian: 'спальня', english: 'bedroom', difficulty: 'easy' },
    ],
    b1: [
      { russian: 'важный', english: 'important', difficulty: 'average' },
      { russian: 'интересный', english: 'interesting', difficulty: 'average' },
      { russian: 'опасный', english: 'dangerous', difficulty: 'average' },
      { russian: 'скучный', english: 'boring', difficulty: 'average' },
      { russian: 'красивый', english: 'beautiful', difficulty: 'average' },
      { russian: 'ужасный', english: 'terrible', difficulty: 'average' },
      { russian: 'экзамен', english: 'exam', difficulty: 'hard' },
      { russian: 'образование', english: 'education', difficulty: 'hard' },
      { russian: 'карьера', english: 'career', difficulty: 'hard' },
      { russian: 'путешествие', english: 'journey/trip', difficulty: 'hard' },
      { russian: 'приключение', english: 'adventure', difficulty: 'hard' },
      { russian: 'ответственность', english: 'responsibility', difficulty: 'hard' },
      { russian: 'я бы хотел', english: 'I would like', difficulty: 'average' },
      { russian: 'вы можете помочь?', english: 'can you help?', difficulty: 'average' },
      { russian: 'это очень интересно', english: 'that is very interesting', difficulty: 'hard' },
      { russian: 'я согласен', english: 'I agree', difficulty: 'average' },
      { russian: 'я не согласен', english: 'I disagree', difficulty: 'average' },
      { russian: 'почему вы это делаете?', english: 'why are you doing this?', difficulty: 'hard' },
      { russian: 'мне нужна помощь', english: 'I need help', difficulty: 'average' },
      { russian: 'это невозможно', english: 'that is impossible', difficulty: 'hard' },
      { russian: 'амбиция', english: 'ambition', difficulty: 'hard' },
      { russian: 'вызов', english: 'challenge', difficulty: 'hard' },
      { russian: 'компетентность', english: 'competence', difficulty: 'hard' },
      { russian: 'дисциплина', english: 'discipline', difficulty: 'hard' },
      { russian: 'этика', english: 'ethics', difficulty: 'hard' },
      { russian: 'справедливость', english: 'justice', difficulty: 'hard' },
      { russian: 'инновация', english: 'innovation', difficulty: 'hard' },
      { russian: 'мотивация', english: 'motivation', difficulty: 'hard' },
      { russian: 'перспектива', english: 'perspective', difficulty: 'hard' },
      { russian: 'стратегия', english: 'strategy', difficulty: 'hard' },
      { russian: 'система', english: 'system', difficulty: 'average' },
      { russian: 'процесс', english: 'process', difficulty: 'average' },
      { russian: 'результат', english: 'result', difficulty: 'average' },
      { russian: 'проблема', english: 'problem', difficulty: 'average' },
      { russian: 'решение', english: 'solution', difficulty: 'average' },
      { russian: 'анализ', english: 'analysis', difficulty: 'hard' },
      { russian: 'синтез', english: 'synthesis', difficulty: 'hard' },
      { russian: 'гипотеза', english: 'hypothesis', difficulty: 'hard' },
      { russian: 'теория', english: 'theory', difficulty: 'average' },
      { russian: 'практика', english: 'practice', difficulty: 'average' },
    ],
  };

  const decks = {
    a1: { name: 'A1 - Beginner' },
    a2: { name: 'A2 - Elementary' },
    b1: { name: 'B1 - Intermediate' },
  };

  const cardsPerSession = 20;

  const [currentDeck, setCurrentDeck] = useState('a1');
  const [customCards, setCustomCards] = useState(() => {
    const saved = localStorage.getItem('russianFlashcardCustomCards');
    return saved ? JSON.parse(saved) : {};
  });
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFinish, setShowFinish] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [newRussian, setNewRussian] = useState('');
  const [newEnglish, setNewEnglish] = useState('');
    const [selectedRemoveIndices, setSelectedRemoveIndices] = useState([]);

  const selectRandomCards = (deckKey) => {
    const defaultCards = allCards[deckKey];
    const deckCustomCards = customCards[deckKey] || [];
    const allDeckCards = [...defaultCards, ...deckCustomCards];
    const shuffled = [...allDeckCards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, cardsPerSession);
  };

  const shuffleCards = (deckKey) => {
    const selectedCards = selectRandomCards(deckKey);
    setCards(selectedCards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowFinish(false);
  };

  useEffect(() => {
    shuffleCards(currentDeck);
  }, [currentDeck, customCards]);

  const handleNext = () => {
    if (currentIndex === cards.length - 1) {
      setShowFinish(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleReplay = () => {
    shuffleCards(currentDeck);
  };

  const handleDeckChange = (deckKey) => {
    setCurrentDeck(deckKey);
  };

  const handleAddCard = () => {
    if (newRussian.trim() && newEnglish.trim()) {
      const newCard = {
        russian: newRussian,
        english: newEnglish,
        difficulty: 'average',
      };
      
      const updated = {
        ...customCards,
        [currentDeck]: [...(customCards[currentDeck] || []), newCard]
      };
      
      setCustomCards(updated);
      localStorage.setItem('russianFlashcardCustomCards', JSON.stringify(updated));

      setNewRussian('');
      setNewEnglish('');
      setShowAddModal(false);
    }
  };

const handleRemoveCard = () => {
    if (selectedRemoveIndices.length > 0) {
      const defaultCards = allCards[currentDeck];
      const updated = {
        ...customCards,
        [currentDeck]: customCards[currentDeck].filter((_, i) => {
          const customIndex = i;
          const originalIndex = defaultCards.length + customIndex;
          return !selectedRemoveIndices.includes(originalIndex);
        })
      };
      setCustomCards(updated);
      localStorage.setItem('russianFlashcardCustomCards', JSON.stringify(updated));
      
      setShowRemoveModal(false);
      setSelectedRemoveIndices([]);
    }
  };

  if (cards.length === 0) return null;

  const currentCard = cards[currentIndex];
  const defaultCards = allCards[currentDeck];
  const deckCustomCards = customCards[currentDeck] || [];
  const allDeckCards = [...defaultCards, ...deckCustomCards];

  return (
    <div className="app-container">
      <div className="card-wrapper">
        <div className="header">
          <h1>Flashcards</h1>
          <p>Learn Russian with ease</p>
        </div>

        {/* Deck selector */}
        <div className="deck-selector">
          {Object.entries(decks).map(([key, deck]) => (
            <button
              key={key}
              className={`deck-btn ${currentDeck === key ? 'active' : ''}`}
              onClick={() => handleDeckChange(key)}
              disabled={currentDeck === key}
            >
              {deck.name}
            </button>
          ))}
        </div>

{/* Add and Remove buttons */}
        <div className="card-management">
          <button className="manage-btn add-btn" onClick={() => setShowAddModal(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Card
          </button>
          <button className="manage-btn remove-btn" onClick={() => setShowRemoveModal(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Remove Card
          </button>
        </div>

        <button className="reshuffle-btn" onClick={handleReplay} title="Reshuffle and restart">
          🃏
        </button>

        <div className="progress-section">
          <p className="progress-text">
            Card {currentIndex + 1} of {cards.length}
          </p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div
          className={`flashcard ${currentCard.difficulty}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`difficulty-badge ${currentCard.difficulty}`}>
            {currentCard.difficulty === 'easy' ? '🟢 Easy' : currentCard.difficulty === 'average' ? '🟡 Medium' : '🔴 Hard'}
          </div>

          <div className="card-content">
            {!isFlipped ? (
              <>
                <p className="card-label">Russian</p>
                <p className="card-text">{currentCard.russian}</p>
                <p className="card-hint">Click to reveal</p>
              </>
            ) : (
              <>
                <p className="card-label">English</p>
                <p className="card-text">{currentCard.english}</p>
              </>
            )}
          </div>
        </div>

        <div className="buttons">
          <button
            className="btn-prev"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            ← Previous
          </button>
          <button className="btn-next" onClick={handleNext}>
            Next →
          </button>
        </div>
      </div>

      {showFinish && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-emoji">🎉</div>
            <h2>You Finished!</h2>
            <p>Great job studying all {cards.length} cards!</p>
            <button onClick={handleReplay}>Replay</button>
          </div>
        </div>
      )}

{/* Add Card Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Card</h2>
            <input
              type="text"
              placeholder="Russian word"
              value={newRussian}
              onChange={(e) => setNewRussian(e.target.value)}
              className="modal-input"
            />
            <input
              type="text"
              placeholder="English translation"
              value={newEnglish}
              onChange={(e) => setNewEnglish(e.target.value)}
              className="modal-input"
            />
            <div className="modal-buttons">
              <button className="modal-btn confirm" onClick={handleAddCard}>
                Add Card
              </button>
            </div>
          </div>
        </div>
      )}

{/* Remove Card Modal */}
      {showRemoveModal && (
        <div className="modal-overlay" onClick={() => setShowRemoveModal(false)}>
          <div className="modal remove-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Remove a Card</h2>
            <p className="modal-subtitle">Select custom cards to remove:</p>
            <div className="card-list">
              {[
                ...allDeckCards.slice(defaultCards.length), // Custom cards first
                ...allDeckCards.slice(0, defaultCards.length), // Default cards after
              ].map((card, displayIndex) => {
                // Find the original index
                const originalIndex = allDeckCards.indexOf(card);
                const isCustomCard = originalIndex >= defaultCards.length;
                return (
                  <label key={originalIndex} className={`card-item ${isCustomCard ? 'custom' : 'default'}`}>
                    <input
                      type="checkbox"
                      checked={selectedRemoveIndices.includes(originalIndex)}
                      onChange={() => {
                        if (selectedRemoveIndices.includes(originalIndex)) {
                          setSelectedRemoveIndices(selectedRemoveIndices.filter(i => i !== originalIndex));
                        } else {
                          setSelectedRemoveIndices([...selectedRemoveIndices, originalIndex]);
                        }
                      }}
                      disabled={!isCustomCard}
                    />
                    <span className="card-text">
                      <span className="russian">{card.russian}</span>
                      <span className="english">{card.english}</span>
                    </span>
                  </label>
                );
              })}
            </div>
            <div className="modal-buttons">
              <button 
                className="modal-btn confirm delete" 
                onClick={handleRemoveCard}
                disabled={selectedRemoveIndices.length === 0}
              >
                Remove Card{selectedRemoveIndices.length > 1 ? 's' : ''}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}