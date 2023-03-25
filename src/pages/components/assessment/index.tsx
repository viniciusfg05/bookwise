export function Assessment(totalStartsPoints: number) {
  return (
    <>
      <button onClick={() => handleStartSelect(1)} type="button" >
        {
          totalStartsPoints < 0 && <Star size={24} /> ||
          totalStartsPoints == 0 && <Star size={24} /> ||
          totalStartsPoints <= 0.5 && <StarHalf weight="fill" size={24} /> ||
          totalStartsPoints >= 0.6 && <Star weight="fill" size={24} />
        }
      </button>

      <button onClick={() => handleStartSelect(2)} type="button">
        {
          totalStartsPoints < 1 && <Star size={24} /> ||
          totalStartsPoints == 1 && <Star size={24} /> ||
          totalStartsPoints <= 1.5 && <StarHalf weight="fill" size={24} /> ||
          totalStartsPoints >= 1.6 && <Star weight="fill" size={24} />
        }
      </button>

      <button onClick={() => handleStartSelect(3)} type="button">
        {
          totalStartsPoints < 2 && <Star size={24} /> ||
          totalStartsPoints == 2 && <Star size={24} /> ||
          totalStartsPoints <= 2.5 && <StarHalf weight="fill" size={24} /> ||
          totalStartsPoints >= 2.6 && <Star weight="fill" size={24} />
        }
      </button>

      <button onClick={() => handleStartSelect(4)} type="button">
        {
          totalStartsPoints < 3 && <Star size={24} /> ||
          totalStartsPoints == 3 && <Star size={24} /> ||
          totalStartsPoints <= 3.5 && <StarHalf weight="fill" size={24} /> ||
          totalStartsPoints >= 3.6 && <Star weight="fill" size={24} />
        }
      </button>

      <button onClick={() => handleStartSelect(5)} type="button">
        {
          totalStartsPoints < 4 && <Star size={24} /> ||
          totalStartsPoints == 4 && <Star size={24} /> ||
          totalStartsPoints <= 4.5 && <StarHalf weight="fill" size={24} /> ||
          totalStartsPoints >= 4.6 && <Star weight="fill" size={24} />
        }
      </button>
    </>
  )
}