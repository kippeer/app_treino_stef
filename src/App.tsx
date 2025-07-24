import React from 'react';
import { Calendar, Target, Zap, Clock, Moon, Skull } from 'lucide-react';

interface Exercise {
  name: string;
  muscles: string;
  sets: string;
  isBonus?: boolean;
}

interface WorkoutDay {
  title: string;
  focus: string;
  exercises: Exercise[];
}

const workouts: Record<string, WorkoutDay> = {
  monday: {
    title: "Treino de Segunda-feira",
    focus: "Glúteos + Membros Inferiores",
    exercises: [
      {
        name: "Agachamento Sumô",
        muscles: "Glúteos, Adutores",
        sets: "3 x 10"
      },
      {
        name: "Hip Thrust",
        muscles: "Glúteos, Posterior",
        sets: "3 x 10"
      },
      {
        name: "Cadeira Extensora",
        muscles: "Quadríceps (isolado)",
        sets: "3 x 10"
      },
      {
        name: "Supino Inclinado c/ Halteres",
        muscles: "Peito superior, Ombros",
        sets: "3 x 10"
      },
      {
        name: "Panturrilha em Pé",
        muscles: "Panturrilhas",
        sets: "3 x 15",
        isBonus: true
      }
    ]
  },
  tuesday: {
    title: "Treino de Terça-feira",
    focus: "Posterior + Glúteos",
    exercises: [
      {
        name: "Stiff (RDL)",
        muscles: "Posterior, Glúteos",
        sets: "3 x 10"
      },
      {
        name: "Avanço com Marcha",
        muscles: "Glúteos, Quadríceps",
        sets: "3 x 10 (cada perna)"
      },
      {
        name: "Cadeira Flexora",
        muscles: "Posterior (isolado)",
        sets: "3 x 10"
      },
      {
        name: "Remada Curvada",
        muscles: "Costas, Bíceps",
        sets: "3 x 10"
      },
      {
        name: "Desenvolvimento Ombros",
        muscles: "Deltoides",
        sets: "3 x 12",
        isBonus: true
      }
    ]
  },
  wednesday: {
    title: "Treino de Quarta-feira",
    focus: "Full Lower Body + Core",
    exercises: [
      {
        name: "Leg Press 45°",
        muscles: "Quadríceps, Glúteos",
        sets: "3 x 10"
      },
      {
        name: "Glúteo 4 Apoios",
        muscles: "Glúteo máximo",
        sets: "3 x 15"
      },
      {
        name: "Elevação Pélvica Unilateral",
        muscles: "Glúteo médio, Posterior",
        sets: "3 x 12 (cada perna)"
      },
      {
        name: "Puxada Frente",
        muscles: "Costas, Bíceps",
        sets: "3 x 10"
      },
      {
        name: "Prancha",
        muscles: "Core completo",
        sets: "3 x 30s",
        isBonus: true
      }
    ]
  },
  thursday: {
    title: "Treino de Quinta-feira",
    focus: "Glúteos + Upper Body",
    exercises: [
      {
        name: "Agachamento Búlgaro",
        muscles: "Glúteos, Quadríceps",
        sets: "3 x 10 (cada perna)"
      },
      {
        name: "Ponte Glútea",
        muscles: "Glúteos, Core",
        sets: "3 x 15"
      },
      {
        name: "Supino Reto",
        muscles: "Peito, Tríceps",
        sets: "3 x 10"
      },
      {
        name: "Puxada Alta",
        muscles: "Costas, Bíceps",
        sets: "3 x 10"
      },
      {
        name: "Tríceps Pulley",
        muscles: "Tríceps",
        sets: "3 x 12",
        isBonus: true
      }
    ]
  },
  friday: {
    title: "Treino de Sexta-feira",
    focus: "Full Body + Definição",
    exercises: [
      {
        name: "Deadlift Sumô",
        muscles: "Posterior, Glúteos",
        sets: "3 x 8"
      },
      {
        name: "Cadeira Abdutora",
        muscles: "Glúteo médio",
        sets: "3 x 15"
      },
      {
        name: "Rosca Bíceps",
        muscles: "Bíceps",
        sets: "3 x 12"
      },
      {
        name: "Elevação Lateral",
        muscles: "Deltoides lateral",
        sets: "3 x 12"
      },
      {
        name: "Abdominais Bicicleta",
        muscles: "Core, Oblíquos",
        sets: "3 x 20",
        isBonus: true
      }
    ]
  }
};

const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const weekDayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

function App() {
  const today = new Date();
  const currentDay = weekDays[today.getDay()];
  const currentDayName = weekDayNames[today.getDay()];
  
  const currentWorkout = workouts[currentDay];
  
  const isWeekend = currentDay === 'saturday' || currentDay === 'sunday';

  if (isWeekend) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-8 max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-black rounded-full mb-4 border-2 border-purple-400">
              <Moon className="w-8 h-8 text-purple-300" />
            </div>
            <h1 className="text-2xl font-bold text-purple-100 mb-2">{currentDayName}</h1>
            <p className="text-purple-300">Dia de Descanso</p>
          </div>
          
          <div className="bg-gray-800 border border-purple-500 rounded-2xl shadow-2xl p-6 text-center">
            <Skull className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-purple-100 mb-3">
              Hora do Descanso, Stefanny! 🖤
            </h2>
            <p className="text-purple-200 leading-relaxed">
              Até as rainhas góticas precisam descansar. Use este tempo para recarregar 
              sua energia sombria e voltar ainda mais poderosa! 🌙
            </p>
            <div className="mt-6 p-4 bg-purple-900 border border-purple-600 rounded-xl">
              <p className="text-sm text-purple-200 font-medium">
                🌙 Dica: Hidrate-se bem e mantenha sua energia dark em alta!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-black rounded-full mb-4 border-2 border-purple-400">
            <Target className="w-8 h-8 text-purple-300" />
          </div>
          <h1 className="text-2xl font-bold text-purple-100 mb-2">
            {currentWorkout.title}
          </h1>
          <p className="text-purple-300 mb-4">Treino da Stefanny - Gótica Suave 🖤</p>
          <div className="inline-flex items-center px-4 py-2 bg-gray-800 border border-purple-500 rounded-full shadow-lg">
            <Clock className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-200">
              {currentWorkout.focus}
            </span>
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-4">
          {currentWorkout.exercises.map((exercise, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                exercise.isBonus 
                  ? 'border-2 border-purple-400 bg-gradient-to-r from-purple-50 to-gray-100' 
                  : 'bg-gray-800 border border-purple-600'
              }`}
              style={!exercise.isBonus ? { backgroundColor: '#1f2937', borderColor: '#7c3aed' } : {}}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {exercise.isBonus && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-600 to-black text-purple-100 mr-2">
                        <Zap className="w-3 h-3 mr-1" />
                        BÔNUS
                      </span>
                    )}
                    <h3 className={`text-lg font-semibold ${exercise.isBonus ? 'text-gray-800' : 'text-purple-100'}`}>
                      {exercise.name}
                    </h3>
                  </div>
                  <p className={`text-sm mb-2 ${exercise.isBonus ? 'text-gray-600' : 'text-purple-300'}`}>
                    <span className="font-medium">Músculos:</span> {exercise.muscles}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-black rounded-full flex items-center justify-center mr-3 border border-purple-400">
                    <span className="text-purple-100 font-bold text-sm">
                      #{index + 1}
                    </span>
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-wide font-medium ${exercise.isBonus ? 'text-gray-500' : 'text-purple-400'}`}>
                      Séries x Repetições
                    </p>
                    <p className={`text-lg font-bold ${exercise.isBonus ? 'text-gray-800' : 'text-purple-100'}`}>
                      {exercise.sets}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="bg-gray-800 border border-purple-500 rounded-2xl shadow-2xl p-6">
            <h3 className="text-lg font-semibold text-purple-100 mb-2">
              🖤 Dicas da Gótica Suave
            </h3>
            <div className="space-y-2 text-sm text-purple-200">
              <p>• Aqueça sempre antes de começar</p>
              <p>• Mantenha sua postura elegante durante os exercícios</p>
              <p>• Descanse 60-90 segundos entre as séries</p>
              <p>• Hidrate-se durante o treino, Stefanny! 🌙</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;