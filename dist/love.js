/*==============================BASIC FUNCTIONS===================================*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function upright_or_reversed() {
  u = getRndInteger(0, 1);
  if (u == 0) {
    return "upright";
  } else {
    return "reversed";
  }
}

/*=================================MAJOR ARCANA===================================*/

function fool() {
  if (u == 0) {
    return "<p>연애운에서 바보 카드는 신나고 즉흥적이지만 약간 변덕스럽다. 연애운에서 바보라는 말은 너무 사랑에 빠져서 흥분을 억제하기 힘들다는 것을 나타낸다. 싱글인 사람들에게 충동적이고 근심 없는 로맨스가 생길것이다. 만약 바보카드가 나타난다면, 즐거움이 가득한 로맨스에 대비하되, 이 시간 동안 진정한 사랑이 당신 뜻대로 된다면 놓치지 않도록 주의하라.</p>";
  } else {
    return "<p>애정운에서 거꾸로된 바보카드는 모험을 추구하는 것이 당신이 정말로 원하는 친절한 사랑을 갖는 것을 방해하거나 현재 관계에 불확실성을 야기하고 있다는 것을 나타낼 수 있다. 거꾸로된 바보카드는 두 사람의 관계는 흥미로울 수 있지만 위험한 행동을 수반할 수도 있습니다. 주의하세요, 이것은 불안감을 초래할 수 있고 독자 분의 관계를 불안한 근거에 놓이게 할 수도 있습니다.</p>";
  }
}
var Fool = {
  name: "The Fool",
  index: 0,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg",
  rw_addendum:
    "어리석음, 조증, 사치, 도취, 정신 착란, 광란, 비통함.\n \
    reversed : 태만, 부재, 분배, 부주의, 무관심, 무효, 허영심.",
  rw_meaning: fool()
};

function Magician() {
  if (u == 0) {
    return "<p>연애운에서 마술사카드는 긍정적인 카드입니다. 연애하는 이들에게 마법사 타로는 더 강한 헌신과 행복을 기대할 수 있는 새롭고 깊은 단계로 나아가는 관계를 의미한다. 당신이 미혼이라면 마법사는 지금이 새로운 사람을 만날 좋은 때라고 말합니다. 당신의 파트너는 당신에게 진지하고, 좋은 의도를 가지고 당신을 잘 대해줄 것입니다.</p>";
  } else {
    return "<p>연애운에서 거꾸로된 마법사카드는 당신의 필요와 욕망에 대해 당신의 파트너에게 더 솔직하고 솔직할 필요가 있다는 것을 나타낼 수 있다. 만약 당신이 원하는 것을 얻기 위해 당신의 파트너를 조종하고 싶은 유혹을 받는다면, 하지 마세요. 정직은 속임수보다 훨씬 더 큰 도움이 될 것이다.  그것은 또한 신뢰할 수 있는 것처럼 보이는 파트너/연인이 그들의 이기적인 이유로 당신을 조종하기 위해 당신에 대한 그들의 영향력을 사용할 수도 있다는 것을 나타낼 수 있다.  만약 당신이 미혼이라면 마법사카드는 당신이 사랑과 당신의 미래의 연애 생활에 대해 냉소적이 될 수 있고 당신의 삶에 좋은 사람을 끌어들이지 못할 것 같은 느낌을 줄 수 있다고 말한다. 믿음을 잃지 마세요. 만약 여러분이 긍정적으로 생각하고 사랑과 빛을 세상에 보낸다면, 여러분은 결국 여러분에게 같은 것을 다시 끌어들일 것입니다!</p>";
  }
}
var Magician = {
  name: "The Magician",
  index: 1,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_01_Magician.jpg",
  rw_addendum:
    "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; \
    self-confidence, will; the Querent, if male. Reversed: Physician, Magus, mental disease, disgrace, disquiet.",
  rw_meaning: Magician()
};

function HighPriestess() {
  if (u == 0) {
    return "<p>만약 당신이 남자라면, 대제사장카드는 당신이 사랑에 빠지게 될 것임을 나타내는 카드입니다. 보통 당신이 당신에게 도달할 수 없을지도 모르는 매력적인 여성스러운 감각적인 사람에게 빠져들 것이라는 것을 의미합니다. 만약 당신이 여성이라면, 대제사장카드는 당신이 한 명 이상의 사람들에 의해 고백을 받을 것을 나타냅니다.</p>";
  } else {
    return "<p>거꾸로된 대제사장카드는 이성적으로 당신을 원하는 사람이 있을 수 있습니다. 그러나 당신은 그들의 동기에 의문을 가질 수도 있고 관심을 받는 것이 당신을 불편하게 만들 수도 있다. 통제되지 않는 감정 폭발과 높은 성적 긴장을 예상할 수 있습니다.  만약 여러분이 파트너에 대한 인내심을 잃거나 논쟁이 잦다면, 여러분 자신을 위한 시간을 가지세요.</p>";
  }
}
var HighPriestess = {
  name: "The High Priestess",
  index: 2,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_02_High_Priestess.jpg",
  rw_addendum:
    "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male;\n \
    the Querent herself, if female; silence, tenacity; mystery, wisdom, science. Reversed: Passion, moral or physical ardour, conceit, surface knowledge.",
  rw_meaning: HighPriestess()
};

function Empress() {
  if (u == 0) {
    return "<p>연애운에서 황후카드는 이성을 얻을 수 있는 매우 긍정적인 카드입니다.  만약 당신이 미혼이라면 연애를 시작할 준비를 하세요. 왜냐하면 황후카드는 진정한 사랑과 로맨스가 오고 있다는 것을 나타내기 때문입니다. 만약 당신이 연애 중이라면, 그것은 헌신적인 관계가 점점 더 깊어지고 더 사랑스럽고 애틋해지는 지표입니다.</p>";
  } else {
    return "<p>만약 당신이 미혼이라면 거꾸로된 황후카드는 당신이 당신을 쫓는 많은 잠재적인 파트너들이 있다는 것을 나타낼 수 있지만, 당신이 반드시 당신의 진짜 모습을 세상에 내놓는 것은 아닐지도 모른다. 당신이 아닌 사람이 되려고 하지 말고, 특히 연애에 있어서는 다른 사람의 인정을 받으려고 노력하세요.  만약 여러분이 관계에 있다면, 그것은 여러분이 진정한 감정을 표현하지 않고 있고, 관계를 균형 있게 유지하려고 노력하기 위해 그것들을 억누르고 있다는 것을 나타낼 수 있습니다. 만약 여러분이 파트너에게 여러분의 감정에 대해 정직하다면 여러분은 거절이나 부정적인 반응을 두려워할 수도 있습니다. 왜 감정을 억누르고 있는지 알아보는 시간을 가질 필요가 있다. 현재 이런 경향이 있을 수 있으니 주변 사람들에게 고압적인 태도를 보이는 것을 염두에 두세요. 그것은 단순히 여러분이 내면에서 느끼고 있는 불안정의 증상일 뿐입니다, 그러니 초점을 자신에게 다시 옮기면 멈출 것입니다. 여러분의 직관을 믿고 그것이 여러분을 아름답고, 자신감 있고, 영감을 주는 사람으로 돌아오게 하세요!</p>";
  }
}
var Empress = {
  name: "The Empress",
  index: 3,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_03_Empress.jpg",
  rw_addendum:
    "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.\n\
    Reversed: Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
  rw_meaning: Empress()
};

function Emperor() {
  if (u == 0) {
    return "<p>당신이 독신이고 남자에게 관심이 있다면, 사랑 타로 맥락에서 황제는 나이든 남자와의 낭만적인 관계를 나타낼 수 있습니다. 그는 구조, 질서, 논리 및 일상을 좋아할 것입니다. 좋은 영향을 미치겠지만 로맨스는 그의 강점이 아니다. 그러나 그는 실용적이고 신뢰할 수 있으며 보호적입니다. 당신이 독신이고 여성에게 관심이 있다면 황제 타로카드는 당신이 당신의 감정에 더 개방적일 필요가 있다는 신호입니다. 특히 누군가에 대한 감정이 있다면 총알을 깨물고 그녀에게 말해야 합니다. 그녀가 추측할 것이라고 기대하지 마십시오! 이미 관계에 있는 사람들에게 황제는 일부일처제와 오래 지속되는 관계의 좋은 징조입니다. 관계 문제를 경험했다면 개선되기 시작하고 관계의 안정성이 회복될 것입니다.</p>";
  } else {
    return "<p>연애운에서 뒤집힌 황제 타로 카드는 갈등이나 불행을 일으키는 관계의 힘의 불균형을 나타낼 수 있습니다. 그것은 한 파트너가 다른 파트너를 통제하거나 소유욕이 강하거나 완고하거나 위압적임을 의미할 수 있습니다. 이러한 유형의 행동은 다른 파트너가 갇힌 느낌을 받게 합니다. 황제 역전은 관계의 구조를 원하는 것과 통제 괴물이 되는 것 사이에 균형이 필요하다는 것을 보여줍니다. 타협하는 법을 배우십시오! 당신이 독신이라면, 뒤집힌 타로카드는 당신의 아버지 문제가 당신의 파트너 선택에 안좋은 영향으로 이어지고 있음을 나타낼 수 있습니다. 당신을 이용하려는 사람들의 관심을 끌지 않으려면 이러한 문제를 해결해야 합니다.</p>";
  }
}
var Emperor = {
  name: "The Emperor",
  index: 4,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_04_Emperor.jpg",
  rw_addendum:
    "사회성 권위, 지배, 안정, 행동력, 성취, 달성, 완전 강한 긍정, 능력자, 사업자기질, 완벽주의\n\
    reversed: 낭비하는, 의심 많은, 자기 주장이 강함, 게으름",
  rw_meaning: Emperor()
};

function Hierophant() {
  if (u == 0) {
    return "<p>현재 연애를 하고 있는 사람들에게 이 카드는 결혼과 약속 카드이다. 이 카드가 나타나면 관계가 더욱 공고해지고 새로운 관계로 이동하기 시작할 것으로 예상할 수 있습니다. 그것은 당신과 당신의 파트너가 같은 가치와 목표를 공유하고 있다는 것을 나타내는데, 만약 당신이 헌신적인 관계가 당신이 원하는 것이라면 얻을 수 있는 매우 좋은 카드이다. 만약 당신이 미혼이라면, 이 카드는 헌신, 사랑, 그리고 안전 위에 세워질 새로운 관계를 곧 나타낼 것입니다.</p>";
  } else {
    return "<p>독신인 경우 관습적이지 않은 관계나 그에 대한 욕구를 의미할 수 있다. 결혼을 하지 않기로 선택함으로써 전통과 결별하는 것일 수도 있다. 그것은 또한 전통적인 성 역할의 역전을 나타낼 수 있다. 그것은 또한 가치관과 목표에 관한 한 당신과 당신의 파트너가 같은 생각을 하고 있지 않다는 것을 나타낼 수 있다. 이것은 독자 분의 관계에 갈등과 불안을 야기하고 있을 수도 있습니다. 여러분 각자는 마음을 열고 상대방이 어디에서 왔는지 이해하려고 노력해야 합니다.  둘 중 어느 한쪽을 당신의 안전지대 밖으로 너무 멀리 밀어내지 않고 합의를 이끌어내기 위해서는 타협이 필요하다.</p>";
  }
}
var Hierophant = {
  name: "The Hierophant",
  index: 5,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_05_Hierophant.jpg",
  rw_addendum:
    "Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.\n\
    Reversed: Society, good understanding, concord, overkindness, weakness.",
  rw_meaning: Hierophant()
};

function Lovers() {
  if (u == 0) {
    return "<p>연애운에서 이 카드는 여러분이 얻을 수 있는 최고의 카드 중 하나입니다! 이것은 소울메이트 카드이며 두 사람 사이의 끈끈한 유대감과 동질감을 나타냅니다. 만약 당신이 미혼이라면, 조만간 연애를 시작하게 될것입니다! 이것은 단순한 열애 그 이상이 될 것이다. 로맨스는 물론 강렬한 매력과 성적 열정이, 깊은 인연과 상호 이해가 있을 것이다. 이 주요 아르카나 카드는 당신과의 관계에서 로맨스가 다시 불붙기를 기대하게 합니다. 당신과 당신의 파트너 사이의 유대감은 당신이 상상하는 것보다 더 깊어지고 증가할 것입니다. 연인들은 당신과 당신의 파트너가 대부분의 커플들이 꿈만 꿀 수 있는 정신적, 감정적, 정신적, 육체적 관계를 맺고 있다는 것을 나타냅니다.</p>";
  } else {
    return "<p>거꾸로된 연인카드는 성적인 측면은 여전히 훌륭하지만, 다른 중요한 부분에서 당신과 당신의 파트너가 같은 생각을 하고 있지 않을 수도 있다는 것을 나타낼 수 있습니다. 그것은 또한 한 명의 파트너가 그 관계에 더 감정적으로 투자하고 있다는 징후가 될 수 있다. 두려움이나 신뢰 문제는 독자 분이 완전히 뛰어들지 못하게 할 수 있으며, 이는 관계가 번창하기 위해 필요합니다. 여러분은 미래에 대해 다른 목표, 가치관 또는 희망을 가질 수 있습니다. 그 관계는 두 사람의 감정이 여러 수준에서 연결되면서 시작되었을지 모르지만, 당신은 예전만큼 친밀감을 느끼지 못합니다. 근본 원인을 확인하려면 지원 카드를 참고하십시오. 이유가 무엇이든 간에, 관계가 살아남으려면 이러한 차이점들이 해소되어야 합니다. 만약 당신이 미혼이라면 연인들은 당신에게 관계가 오고 있다는 것을 의미하지만 그것은 당신이 원하는 만큼 빨리 일어나지 않을 수도 있다. 또는 잘못된 이유로 파트너를 고르는 것을 나타낼 수 있습니다. 만약 여러분이 누군가와 엮일 것이라면, 이 Major Arcana 카드는 여러분이 한 가지 이상의 방법으로 그들과 연결되도록 지시합니다. 성적인 관계, 심지어 강렬한 관계도 그 자체로 관계를 맺기에 충분하지 않습니다.</p>";
  }
}
var Lovers = {
  name: "The Lovers",
  index: 6,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_06_Lovers.jpg",
  rw_addendum:
    "Attraction, love, beauty, trials overcome.\n\
    Reversed: Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.",
  rw_meaning: Lovers()
};

function Chariot() {
  if (u == 0) {
    return "<p>연애운에서 전차카드는 성공적인 관계를 맺기 위해서는 감정을 정복해야 한다고 제안합니다. 당신과 당신의 파트너가 힘든 시기를 겪고 있었다면, 당신은 함께 모여 소통하고 열심히 일할 필요가 있을 것이다. 당신이 직면한 도전은 극복할 수 없습니다. 그들은 단지 그것들을 해결하기 위해 약간의 노력과 집중을 필요로 합니다. 만약 당신이나 당신의 파트너의 불안감이 문제가 된다면, 이 카드는 또한 성공하기 위해 마음과 마음의 균형을 맞출 필요를 나타내므로 이것들을 조절하는 것이 중요하다. 만약 여러분의 파트너가 논리를 감정적 무기로 사용한다면, 여러분의 관계가 작동하기 위해서는 그들의 방어선을 우회해야 할 수도 있습니다. 만약 당신이 미혼이라면, 이 카드는 당신의 과거 관계들이 당신을 피곤하게 만들었다는 것을 나타낸다. 이 카드는 과거의 아픔을 딛고 앞으로 나아갈 수 있다는 의미를 담고 있다.</p>";
  } else {
    return "<p>거꾸로된 전차카드의 전반적인 의미는 연애의 진도가 느려짐을 의미합니다. 만약 당신이 관계이고 당신이 원하는 만큼 빠르게 진행되지 않는다면, 당신은 인내심을 가지고 그들의 시간에 일이 진행될 것이라는 확신을 가져야 합니다. 일을 강요하는 것은 재앙이 될 수 있다. 마찬가지로, 만약 독자 분이 관계를 다음 단계로 발전시켜야 한다는 압박을 느낀다면, 독자 분이 강요당하는 것을 용납하지 마세요. 한 걸음 물러서서 여러분이 무엇을 준비했는지 생각해보세요. 파트너에게 명확하게 하고 경계를 정하세요. 만약 당신이 미혼이라면, 당신은 곧 누군가를 만날지도 모르지만, 같은 메시지가 적용됩니다, 서두르지 마세요. 새로운 관계의 흥분을 즐기고 부담감을 쌓이지 말고 새로운 사랑에 대해 알아가는 시간을 가지세요. 때로는 그냥 흐름에 맡기고 각자의 속도에 맞춰 변화하도록 하는 것이 더 옳은 판단일 수 있습니다</p>";
  }
}
var Chariot = {
  name: "The Chariot",
  index: 7,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_07_Chariot.jpg",
  rw_addendum:
    "Succour, providence; also war, triumph, presumption, vengeance, trouble.\n\
    Reversed: Riot, quarrel, dispute, litigation, defeat.",
  rw_meaning: Chariot() 
  };

function Strength() {
  if (u == 0) {
    return "<p>독신인 경우, 강도 카드는 자신감이 빛을 발할 때 누군가를 만날 수 있는 절호의 기회입니다. 그것은 또한 약간 거친 면이 있는 사람과 관계를 맺는 지표가 될 수도 있다. 이것은 흥미로운 예상이 될 수 있지만, 만약 이 사람이 너무 거칠다면, 여러분은 그들을 길들일 필요성을 느낄지도 모릅니다. 그들을 길들이고 싶다면, 부드럽게 구슬려라, 그들을 지배하려 하지 마라. 이미 사귀고 있는 사람들에게 강도는 일반적으로 여러분이 가깝고 단결된 강한 부부라는 것을 보여주는 좋은 지표입니다. 만약 독자 분의 관계가 많은 감정적 격변을 겪었다면, 이 카드는 독자 분이 다시 그 위에 올라서기 시작하고 있고, 과거에 직면했던 어떤 문제들이 실제로 독자 분을 더 가깝게 만들었다는 것을 암시합니다.</p>";
  } else {
    return "<p>만약 당신이 독신이라면, 은둔의 타로 카드는 과거의 실연이나 나쁜 이별에서 회복하기 위해 필요했을지도 모르는 외로움과 고독의 기간의 반대편에 나오는 것을 나타낸다. 당신은 곧 새 출발을 할 준비가 될 것입니다. 그것은 또한 순결이나 순결을 나타낼 수 있다. 이 카드는 나이든 더 현명한 파트너를 나타낼 수 있다. 그것은 또한 당신이 당신의 파트너와 연결하기 위해 더 많은 노력을 해야 할 수도 있다는 것을 암시할 수 있다. 그것은 당신과 당신의 파트너가 좋은 시간을 함께 보내는 것보다 당신 자신의 일을 하는 데 너무 집중하고 있다는 것을 나타낼 수 있다.</p>";
  }
}
var Strength = {
  name: "Strength",
  index: 8,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_08_Strength.jpg",
  rw_addendum:
    "Power, energy, action, courage, magnanimity; also complete success and honours.\n\
    Reversed: Despotism, abuse if power, weakness, discord, sometimes even disgrace.",
  rw_meaning: Strength()};

function Hermit() {
  if (u == 0) {
    return "<p>만약 당신이 독신이라면, 은둔의 타로 카드는 과거의 실연이나 나쁜 이별에서 회복하기 위해 필요했을지도 모르는 외로움과 고독의 기간의 반대편에 나오는 것을 나타낸다. 당신은 곧 새 출발을 할 준비가 될 것입니다. 그것은 또한 순결이나 순결을 나타낼 수 있다. 은둔자 카드는 연상의 더 현명한 파트너를 나타낼 수 있다. 그것은 또한 당신이 당신의 파트너와 연결하기 위해 더 많은 노력을 해야 할 수도 있다는 것을 암시할 수 있다. 그것은 당신과 당신의 파트너가 좋은 시간을 함께 보내는 것보다 당신 자신의 일을 하는 데 너무 집중하고 있다는 것을 나타낼 수 있다.</p>";
  } else {
    return "<p>거꾸로된 은둔카드는 외로움의 강한 지표이다. 만약 여러분이 사귀고 있다면, 그것은 여러분이 파트너에게 소외감을 느끼거나 거절당했다는 것을 암시합니다. 또한 사용자와 파트너가 너무 바빠서 연결할 시간이 없음을 나타낼 수 있습니다. 이것은 당신이 연애 중임에도 불구하고 당신을 외로움을 느끼게 하는 것일지도 모릅니다. 그것은 또한 한 사람이 다른 사람이 관계를 유지하려고 노력하는 동안 관계를 끊는 것을 암시할 수 있다. 독신인 경우, 은둔자카드는 당신이 선반 위에 남겨지는 것을 두려워하거나 특별한 사람을 만날 기회를 놓쳤다고 느낄 수 있다는 것을 나타낼 수 있다. 이 카드는 오랜 독신 생활을 한 지금이 사랑을 찾기 시작할 때라는 것을 거꾸로 나타낼 수 있다. 두려움은 접어두고 다시 밖으로 나와야 해  만약 당신이 최근에 당신의 파트너와 헤어졌다면 그것은 당신이 전 여자친구와 다시 만나고 싶다는 표시일 수 있다.</p>";
  }
}
var Hermit = {
  name: "The Hermit",
  index: 9,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_09_Hermit.jpg",
  rw_addendum:
    "Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.\n\
    Reversed: Concealment, disguise, policy, fear, unreasoned caution.",
  rw_meaning: Hermit()};

function WheelFortune() {
  if (u == 0) {
    return "<p>행운의 수레바퀴 카드는 보통 긍정적인 변화를 나타내므로 당신은 당신의 관계에서 다음 단계를 밟거나 당신의 파트너와 새로운 국면을 시작하거나 심지어 어떤 종류의 공동 프로젝트를 시작할 수 있다. 동시에, 이 카드가 가져오는 변화는 당신에게 힘들게 느껴질 수 있다. 만약 이성 관계에 만족하지 않는다고 느껴진다면 이 카드는 격변의 신호탄이 될 수 있습니다. 그것은 당신과 당신의 파트너가 관계를 개선하기 위해 상황을 뒤흔들고 필요한 변화를 만드는 것일 수도 있고, 아니면 그것은 당신을 더 나은 것으로 자유롭게 움직일 수 있는 이별이 될 수도 있다. 무슨 일이 일어나든, 그것은 여러분이 있어야 할 곳으로 여러분을 이끌 것입니다. 만약 당신이 미혼이라면, 이 카드에 있는 행운의 수레바퀴는 우주가 당신에게 마땅한 사랑을 가져다주기 위해 일하고 있지만 당신은 우주와 함께 일해야 한다는 것을 나타낼 수 있다! 당신은 사랑에 빠지는 행운이 있으니 지금은 자신을 밖으로 내놓고 새로운 사람들을 만날 때입니다. 운명의 수레바퀴는 또한 운명의 카드이기 때문에 사랑의 맥락에서 그것은 소울메이트를 의미할 수 있다. 만약 당신이 미혼이라면 당신은 곧 이성을 사귈지도 모른다. 당신과 당신의 파트너가 운명이라는 것을 나타낼지도 모른다!</p>";
  } else {
    return "<p>만약 당신이 관계에 있다면 타로가 뒤집은 행운의 수레바퀴는 침체 또는 관계에서 벗어나는 반짝임을 나타낼 수 있다. 그렇다고 해서 모든 관계에는 기복이 있기 때문에 관계를 끝내기 위해 자동적으로 성급한 결정을 내려야 하는 것은 아니다. 당신은 관계의 한 국면에서 다른 국면으로 옮겨가는 것일 수도 있고 이것은 그 사이에 약간의 슬럼프가 될 수도 있다. 상황을 평가하고 당신에게 맞는 것을 찾으려고 노력하세요. 어느 쪽이든 이 격변의 시간은 지나갈 것이다. 이전의 실수가 다시 돌아와 문제를 일으킬 수 있습니다. 만약 당신이 미혼이고 관계에서 운이 없었다고 느낀다면, 당신은 자신의 선택과 행동을 살펴볼 필요가 있다. 당신은 사랑의 기회를 버린 적이 있나요? 만약 그렇다면, 당신의 실수로부터 배우면, 당신은 또 다른 행복의 기회를 얻을 것입니다. 우리는 이 삶에서 우리가 배워야 할 교훈을 선택하며 당신은 당신의 과거로부터 배우고 이러한 카르믹 교훈을 당신의 미래에 적용함으로써 당신의 행운을 바꿀 수 있습니다. 싱글이건 연인 사이건 이 카드는 차질이나 지연을 경험할 수 있다는 신호입니다. </p>";
  }
}
var WheelFortune = {
  name: "Wheel of Fortune",
  index: 10,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_10_Wheel_of_Fortune.jpg",
  rw_addendum:
    "Destiny, fortune, success, elevation, luck, felicity.\n\
    Reversed: Increase, abundance, superfluity.",
  rw_meaning: WheelFortune()};

function Justice() {
  if (u == 0) {
    return "<p>독신인 경우 이 카드는 법조계에 종사하는 사람(판사, 변호사, 법무비서 등)과의 관계를 나타낼 수 있습니다. 천칭자리와 일치하는 것이 타로 카드이므로 천칭자리가 여러분의 삶에 들어올 수도 있습니다. 만약 여러분이 다른 사람들을 진실하고 친절하게 대했고, 그 대가로 좋은 대접을 받지 못했다면, 사랑의 타로 독서에서의 정의는 여러분이 여러분의 삶에 들어올 자격이 있는 사랑하는 파트너와 함께 이 불균형이 곧 교정되려고 한다는 것을 나타낼 수 있습니다. 그것은 또한 당신을 나쁘게 대했던 사람들이 대가를 받을 것이라는 것을 의미할 수 있습니다. 정의가 정말 좋은 징조인지 나쁜 징조인지는 당신과 당신의 파트너의 행동에 달려 있습니다. 만약 여러분이 둘 다 정직하고 여러분의 관계에서 진실하게 행동한다면, 여러분은 화합의 기간 또는 더 큰 헌신이라는 형태로 보상을 보게 될 것입니다. 그것은 결혼 계약을 나타내며 결혼을 나타낼 수 있습니다. 그러나 너희 둘 중 어느 한 사람이 정직하지 못했거나, 바람을 피웠다면, 정의는 진실이 밝혀질 것이며, 정직하지 못한 사람은 뿌린 대로 거두는다는 것을 나타냅니다.</p>";
  } else {
    return "<p>만약 여러분이 관계에 있다면 이 카드는 속임수나 거짓말이 들통날 수 있는 계기가 될 수 있습니다. 그래서 만약 여러분이 파트너에게 바람을 피우거나 거짓말을 했다면, 큰 반향을 예상하세요. 카드로 당신과 당신의 파트너 사이의 어떤 논쟁도 끝이 없는 것처럼 보인다는 것을 발견할지도 모른다. 그것은 또한 여러분이 공정하게 대우받지 못하고 있거나 관계에서 동등한 대우를 받고 있지 않다고 느낀다는 표시일 수도 있습니다. 독자 분이 파트너에게 심판을 내리기 전에, 관계에서 독자 분의 역할을 살펴보고, 그 책임을 파트너에게 전가함으로써 공정한지를 스스로에게 물어보세요. 만약 독자 분이 관계 문제를 평가하고 독자 분이 흠이 없다고 느낀다면, 독자 분은 여전히 그 상황에서 배우려고 노력해야 합니다. 기억하세요, 우리는 사람들에게 우리를 대하는 법과 우리가 참는 것을 가르칩니다, 우리는 결국 얻게 됩니다! 만약 여러분이 미혼이라면, 정의가 뒤바뀐 것은 여러분이 마땅한 관계에 대해 준비가 되었다고 느낄 수 있지만, 여러분이 앞으로 나아가기 위해 필요한 과거의 관계로부터 교훈을 얻지 못하고 같은 실수를 반복하지 않는다는 것을 나타낼 수 있습니다. 그것은 또한 여러분이 관계의 균형이 부족한 경향이 있다는 것을 나타낼 수 있고 이것은 여러분의 관계를 허우적거리게 할 수도 있습니다. 우리는 모두 새로운 사랑의 첫 번째 흥분에 사로잡히지만, 자신을 완전히 잃지 않도록 조심하라! 누군가를 만났을 때 당신의 삶과 당신의 독립적인 삶 사이에서 균형을 유지하려고 노력하라, 그러면 당신의 관계는 그들이 성장하는 데 필요한 공간을 줄 것이다. 만약 여러분이 과거의 파트너들을 나쁘게 대했다면, 정의가 뒤바뀌는 것은 여러분이 행동으로 인한 결과를 겪고 있을 수 있다는 징조일 수 있습니다.</p>";
  }
}
var Justice = {
  name: "Justice",
  index: 11,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_11_Justice.jpg",
  rw_addendum:
    "Equity, rightness, probity, executive; triumph of the deserving side in law.\n\
    Reversed: Law in all its departments, legal complications, bigotry, bias, excessive severity.",
  rw_meaning: Justice()};

function HangedMan() {
  if (u == 0) {
    return "<p>이 카드는 현재 당신의 관계가 어떻게 진행되는지에 대해 불만족스러울 수 있다고 한다. 이것은 또한 여러분이나 여러분의 파트너가 여러분의 선택지를 평가하기 위해 혹은 여러분이 그 관계가 어디로 이끌기를 원하는지를 평가하기 위해 관계에서 한 발짝 물러나야 할 필요성을 느끼고 있다는 것을 의미할 수도 있습니다. 어떤 결정도 미루고 생각할 시간을 가지라고 해 여러분은 여러분의 관계가 어떠해야 하는지에 대한 인식을 다시 생각해보고 관계가 아닌 것에 대해 걱정하는 대신 그 관계의 긍정적인 측면에 초점을 맞출 필요가 있을 것입니다. 그 대신에 만약 당신이 진정으로 행복하지 않다고 느낀다면 혼자 이 관계를 유지하고 있다고 말하고 있습니다. 가고 싶으면 떠나도 돼 만약 당신이 미혼이라면, 이 카드는 당신을 행복하게 하지 않는 상황, 아이디어 또는 사람들로부터 자신을 해방시킬 필요가 있다는 것을 나타낼 수 있다. 이것은 오래된 부정적인 관계 패턴을 방출하는 것을 포함할 수 있습니다. 만약 여러분이 전 남자친구에 대한 감정을 계속 간직하고 있었다면, 이 카드 은 여러분에게 그 감정들을 털어놓을 때라고 말합니다. 그것은 또한 여러분이 여러분 주변의 선택지에 자신을 열기 위해 이상적인 파트너에 대한 엄격한 선입견을 풀 필요가 있다는 것을 의미할 수도 있습니다.</p>";
  } else {
    return "<p>만약 당신이 미혼이라면 이 카드는 당신이 실수로부터 배우지 않고 계속해서 같은 부정적인 관계 패턴을 반복해왔다는 것을 나타낼 수 있다. 여러분은 나쁜 관계에서 다음 관계로 서두르고 있고 이러한 관계를 선택하는 데 있어서 여러분이 하는 역할에 대해 결코 책임을 지지 않을 수도 있습니다. 속도를 늦추고, 왜 이 패턴이 계속되는지, 그리고 그것을 바꾸기 위해 여러분 안에서 해결해야 할 것이 무엇인지 알아보세요. 교수형은 당신과의 관계가 잘 되지 않을 수도 있지만 당신이나 당신의 파트너는 혼자가 되거나 다시 시작하는 것이 두려워서 그것을 붙잡고 있을 수도 있습니다. 그것은 또한 관계를 회복할 수 있지만 당신은 현재 겪고 있는 문제들에 직면할 준비가 되어 있지 않다는 것을 나타낼 수 있습니다.</p>";
  }
}
var HangedMan = {
  name: "The Hanged Man",
  index: 12,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_12_Hanged_Man.jpg",
  rw_addendum:
    "Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.\n\
    Reversed: Selfishness, the crowd, body politic.",
  rw_meaning:HangedMan()};

function Death() {
  if (u == 0) {
    return "<p>당신이나 당신의 파트너가 효과가 없는 관계를 고수하고 있거나 당신의 관계가 진전되는 것을 막고 있는 오래된 패턴에 집착하고 있다는 것을 의미할 수 있다. 죽음은 당신이 원하든 원하지 않든 모든 것이 바뀔 것이라는 것을 의미한다. 당신은 변화에 저항하거나 받아들일 수 있습니다. 만약 여러분의 관계가 잘 풀리지 않는다면, 데스 타로 카드는 떠나야 할 때라는 것을 나타낼 수도 있고, 이혼을 나타낼 수도 있고, 혹은 여러분과 여러분의 파트너가 큰 변화를 해야 할 필요가 있다는 것을 나타낼 수도 있고, 그것을 이루기 위해 오래된 패턴이나 이슈를 버려야 한다는 것을 나타낼 수도 있습니다. 죽음의 카드가 바꾸려고 하는 오래된 문제들은 깊숙이 자리 잡고 고통스러울 수 있다. 그런 거라면 연애 상담을 고려해보는 게 좋을 것 같아. 그 결과는 정말로 당신과 당신의 파트너가 변화를 기꺼이 받아들이고, 정말로 그 관계가 살아남기를 원하는지에 달려있다. 데스 타로 카드가 관계에 가져올 수 있는 변화 또한 긍정적일 수 있으며, 그것은 깜짝 약혼이나 임신과 같은 예상치 못한 변화를 나타낼 수 있으며, 당신은 처음에 이러한 변화들을 압도적으로 발견할 수 있다. 미혼인 경우, 사망 카드는 더 이상 쓸모 없는 오래된 믿음, 문제 또는 행동을 곧 버릴 것임을 나타냅니다. 당신의 삶에 새로운 사랑을 가져다 줄 이 변화를 받아들이세요.</p>";
  } else {
    return "<p>이 카드는 당신이 관계의 변화에 저항력이 있다는 강력한 지표이다. 독자 분은 파트너에게 의존한다고 느끼거나 외로움을 두려워하기 때문에 오래 전부터 진행되어 온 관계를 고수하고 있을 수도 있습니다. 아니면 의무감으로 더 이상 사랑하지 않는 파트너와 함께 있을 수도 있습니다. 또한 오래 전에 끝났다고 생각했던 관계가 다시 나타나고 다시 불붙을 수 있다는 것을 나타낼 수 있습니다. 만약 당신이 미혼이라면, 이 카드는 당신의 연애 생활에 긍정적인 것을 가져오기 위해 부정적인 행동 패턴을 버릴 필요가 있다는 강력한 지표이다. 예를 들어 자존감이 낮아 나쁜 상대를 고르는 경향이 있다면 자신을 키우고 자신을 태만하게 하는 행동을 버려야 당신을 사랑과 존중으로 대할 파트너를 인생에 끌어들일 수 있다.</p>";
  }
}
var Death = {
  name: "Death",
  index: 13,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_13_Death.jpg",
  rw_addendum:"",
  rw_meaning:Death()};

function Temperance() {
  if (u == 0) {
    return "<p>애정운에서 이 카드는 가장 좋은 카드 중 하나입니다. 그것은 당신과 당신의 파트너가 사랑과 헌신 그리고 존경의 완벽한 균형을 찾는 조화로운 관계를 나타냅니다. 그것은 또한 소울메이트의 징표이기도 하다. 만약 독자 분이 관계에 문제가 있었다면, 금주는 독자 분께서 함께 나아가기 위해 독자 분의 관계를 지연시키고 있던 어떤 문제라도 함께 해결해 주실 수 있다는 지표입니다. 독신인 경우, 절제는 사랑하는 파트너가 삶에 들어올 수 있는 공간을 만들기 위해 인생의 다른 영역의 균형을 맞추는 법을 배우게 될 지표이다. 일단 당신이 이것을 하고 나면 당신은 당신에게 맞는 파트너를 끌어들일 것입니다.</p>";
  } else {
    return "<p>이카드는 절제는 관계의 불균형으로 인한 갈등과 충돌을 나타낼 수 있습니다. 여러분 중 한 명이 다른 한 명보다 더 신경 쓰는 것처럼 느끼거나 여러분이 보여주는 사랑과 존경이 보답받지 못한다고 느낀 결과일 수도 있습니다. 관계에서 조화가 부족하고 서로 다투고, 서로의 말을 들으려고 하지 않는다는 것을 알게 될 수도 있습니다. 또한 여러분의 문제를 해결하기 위해 함께 일하기 보다는 서로 노골적으로 적대적이고 점수를 매기려고 노력하는 여러분 자신을 발견할 수도 있습니다. 여러분이 직면하고 있는 문제들에 더 잘 대처할 수 있고 해결책을 찾는데 더 개방적일 수 있도록 상황을 진정시키고 여러분 자신의 내적 균형을 찾으려고 노력하세요. 독신인 경우 이 카드는 여러분이 관심 있는 사람들에게 너무 많은 것을 너무 빨리 주고 있다는 것을 의미할 수 있습니다. 이것은 단순히 여러분이 너무 열심히 노력하고 있거나 너무 열심인 것처럼 다가오거나, 문란하거나 완전히 절박한 것으로 다가오게 될 수 있습니다! 사랑을 찾고 있다면 인내심을 가지세요. 누군가를 제대로 알기 전에 서두르거나 억지로 관계를 맺으려고 하지 마세요. 긴장을 풀고 자신만의 내면의 균형을 찾고 새로운 로맨스가 자신만의 속도로 전개되도록 하세요.</p>";
  }
}
var Temperance = {
  name: "Temperance",
  index: 14,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_14_Temperance.jpg",
  rw_addendum:
    "Economy, moderation, frugality, management, accommodation.\n\
  Reversed: Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent;\
  also disunion, unfortunate combinations, competing interests.",
  rw_meaning:Temperance()};

function Devil() {
  if (u == 0) {
    return "<p>당신이나 당신의 파트너가 덫에 걸렸다는 신호일 수 있습니다. 그것은 관계에 너무 몰두하게 됨으로써 야기된 자유의 상실을 나타낼 수 있습니다. 악마는 이 정도의 공동 의존이 건강에 해롭다는 것을 보여준다. 독자 분과 독자 분의 파트너는 한 걸음 물러서서 관계 밖에서 몇 가지 관심사를 재발견하도록 노력해야 합니다. 그것은 또한 당신이나 당신의 파트너가 관계에 영향을 미치는 정신 건강 문제로 고통 받고 있을 수도 있다는 것을 나타낼 수 있다. 만약 그렇다면, 이 시간 동안 두 분 모두를 도와줄 전문 상담사의 도움을 구하세요. 데빌 타로 카드는 질투, 시기, 속임수, 지배, 부정행위의 징후가 될 수 있으며 극도로 부정적인 맥락에서 학대, 폭력 또는 성폭력의 징후가 될 수 있다. 이를 확인하기 위해 지원 카드를 살펴보십시오. 만약 당신이 어떤 형태의 학대 때문에 관계에 갇혔다고 느낀다면, 이 상황에서 벗어날 수 있다는 것을 기억하세요. 악마가 당신을 무력하게 느끼게 하지 마세요. 당신이 미혼이면 악마는 사랑 없이 섹스를 나타낼 수 있습니다. 여러분은 성취감을 주지 못하거나 심지어 위험한 성적 만남을 가졌을 수도 있고, 여러분이 간절히 사랑받고 싶어하기 때문에 여러분을 신경 쓰지 않는 사람들에게 자신을 이용하도록 허락하고 있을 수도 있습니다. 만약 그렇다면, 네가 자존감이 쌓일 때까지 연애를 잠시 쉬어라. 악마는 또한 여러분에게 해로울 수 있는 잠재적인 관계의 지표가 될 수 있습니다. 이 새로운 연애 관심은 약물 중독을 가지고 있을 수도 있고, 정신 건강 문제의 결과로 당신에게 과도하게 의존하게 될 수도 있고, 기만적이거나 폭력적이거나 학대가 될 수도 있습니다. 비록 그들이 처음에는 흥미롭고 흥미진진한 것처럼 보일지라도, 악마는 위험을 나타내므로, 이 사람을 여러분의 삶에 들이는 것을 피하세요.</p>";
  } else {
    return "<p>데빌 타로 카드가 뒤집힌 것은 당신과 당신의 파트너가 틀에 박힌 느낌이었거나 관계가 풀리는 것처럼 느꼈을 수도 있지만 당신은 이것의 반대편으로 나오기 시작했다는 것을 나타낼 수 있다. 그것은 또한 여러분 중 한 명이 여러분의 관계를 회복할 수 없을 정도로 손상시킬 수 있는 무언가를 할 뻔했지만(예: 불륜이나 불륜) 대신 여러분의 관계를 존중하기로 결정했을 수도 있습니다. 만약 독자 분이 학대적인 관계에 있었다면, 독자 분이 더 나은 대우를 받을 자격이 있고 독자 분의 권력을 되찾을 자격이 있다는 것을 깨닫기 시작할지도 모릅니다. 독자 분이 선택권이 있고 독자 분을 위한 도움이 있다는 것을 깨닫기 시작하면서, 독자 분의 폭력적인 파트너가 독자 분에게 가졌던 영향력은 줄어들 수 있습니다. 독신인 경우, 악마카드는 부정적이거나, 학대적이거나, 위험한 사람의 유형을 직설적인 의미로 묘사하여 아슬아슬한 위기를 나타낼 수 있습니다. 그것은 또한 이전에 당신이 독신으로 지내야 한다고 느꼈거나 당신을 사랑해줄 누군가를 필사적으로 찾고 있었기 때문에 어떤 것이라도 내놓을 준비가 되어 있었다는 것을 나타낼 수 있다. 하지만, 당신은 자신에 대해, 그리고 이러한 행동이 어떻게 당신의 사랑을 찾는 것을 방해해 왔는지에 대해 더 잘 알기 시작했습니다. 여러분은 혼자라는 것이 가져다주는 것에 대한 대답만을 할 수 있는 자유를 즐기기 위해 잠시 동안 연애에서 한 발 물러설 필요가 있을 지도 모릅니다. 이런 새로운 태도가 등장하니 제대로 된 파트너가 얼마 뒤처지지 않으니 안심하고 즐기세요.</p>";
  }
}
var Devil = {
  name: "The Devil",
  index: 15,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_15_Devil.jpg",
  rw_addendum:
    "Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.\n\
  Reversed: Evil fatality, weakness, pettiness, blindness.",
  rw_meaning: Devil()};

function Tower() {
  if (u == 0) {
    return "<p>이 카드는 이별, 이별, 이혼을 나타내는 나쁜 징조가 될 수 있습니다. 또한 관계를 절대적인 한계까지 밀어붙일 어렵거나 충격적인 사건을 겪으면서 당신이나 당신의 파트너 또는 둘 모두를 나타낼 수 있다. 두 사람의 관계가 이 타워 행사에서 살아남기 위해서는 서로를 위해 노력하고 열린 정직한 의사소통을 유지해야 할 것입니다. 만약 당신의 관계가 이 격변에서 살아남는다면, 타워는 당신에게 관계가 크게 변화할 것이라고 말한다. 타워는 그릇된 믿음의 파괴를 의미하기 때문에, 관계가 완전히 바뀌었을 수도 있지만 더 견고하고 정직한 토대를 가지고 나올 수도 있기 때문에 이것이 꼭 나쁜 것만은 아닐 것이다. 하지만, 그 시점에 도달하는 것은 커플로서 겪게 될 가장 어려운 일 중 하나가 될 것입니다. 만약 당신이 미혼이라면, 당신은 왜 당신이 미혼인지에 대한 불편한 폭로를 갑자기 직면해야 한다는 것을 알게 될 것이다. 만약 자존심이나 오만이 건강한 관계를 형성하는데 방해가 되었다면, 그것은 혼란스럽거나 파괴적인 사건이 그 자아를 무너뜨릴 것이라는 것을 나타낼지도 모른다. 이것이 즐거운 경험은 아니겠지만, 이것은 당신에게 겸손을 가르쳐주고 미래에 행복하고 건강한 관계를 맺을 수 있는 가능성을 높여줄 것입니다.  런던탑은 또한 폭력이나 폭행을 나타낼 수 있습니다. 그래서 그것은 그곳에 나가 새로운 사람들을 만날 때 당신의 신변에 주의를 기울이라는 경고가 될 수 있습니다. 너무 조심하지 말고 눈치를 보고 적절한 안전 조치를 취하세요.</p>";
  } else {
    return "<p>이 카드는 두 사람의 관계가 끝났다는 것을 알면서도 그 관계가 가져올 고통이 두려워 실제로 끝내는 것을 피하고 있다는 것을 의미할 수 있습니다. 여러분은 사실을 직시하고 여러분이 망가진 것을 붙잡고 있는 한, 여러분이 더 나은 것으로 나아가는 것을 막고 있다는 것을 이해할 필요가 있습니다. 만약 당신의 관계가 최근에 다르지만 온전한 타워 행사를 통해 이루어졌다면 이 카드 는 당신에게 관계를 예전으로 되돌리려고 하지 말라고 말하는 것이다. 당신의 관계는 완전히 변했고 돌아갈 수 없습니다. 당신은 이 새로운 관계가 당신이 원하는 것인지 결정할 필요가 있습니다. 만약 독자 분이 미혼이라면 이 카드는 독자 분이 위험하거나, 학대하거나, 폭력적일 가능성이 있는 누군가와의 비참한 관계를 피했다는 것을 나타낼 수 있습니다. 그것은 또한 여러분이 외상성 혹은 고통스러운 이별을 다루는 것을 미루고 있거나 완전히 피하고 있다는 것을 나타낼 수 있습니다. 여러분이 겪은 일을 직시하는 것보다 이 접근법이 더 쉽다고 생각할 수도 있지만, 그것은 사실 여러분이 여러분의 연애 생활을 하는 것을 멈추게 하고 있습니다.  뭘로 도망치든 간에 멈춰서 마주하고 거기서 뭘 배울 수 있는지 배우고 그 밑에 선을 긋고 과거에 남겨두세요 트럭의 짐을 끌고 갈 때는 앞으로 나아가기 어려우니 처리하고 놓아주세요.</p>";
  }
}
var Tower = {
  name: "The Tower",
  index: 16,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_16_Tower.jpg",
  rw_meaning: "",
  rw_addendum:
    "Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.\n\
  Reversed: According to one account, the same in a lesser degree; also, oppression, imprisonment, tyranny.",
  rw_meaning:Tower()};

function Star() {
  if (u == 0) {
    return "<p>만약 당신이 미혼이라면 이카드는 는 당신이 과거 관계에서 가지고 다녔던 짐을 내려놓을 준비가 되어 있다는 표시이다. 앞으로의 연애는 긍정적이고 사람들을 만나기에 좋은 시간이에요. 그것은 또한 여러분의 삶에 다시 돌아오기 위해 여러분의 과거로부터 누군가를 의미할 수 있습니다. 만약 당신이 연애 중이라면 별은 당신의 관계가 더 깊은 곳으로 발전한다는 신호입니다. 기존에 관계에 문제가 있었다면, 힐링에 마음을 열면 이러한 문제들이 치유될 수 있고 밝은 미래를 가질 수 있다고 더 스타는 말한다.</p>";
  } else {
    return "<p>거꾸로된 별 카드는 관계에 대한 신뢰를 잃었거나 관계의 긍정적인 측면에 초점을 맞추고 있다는 것을 나타냅니다. 독자 분의 관계는 불씨를 어느 정도 잃었을 수도 있고, 독자 분과 독자 분의 파트너가 어느 정도 단절되었다고 느낄 수도 있습니다. 이 카드는 이러한 문제들은 고칠 수 있지만 앞으로 나아가고 싶다면 오래된 상처를 치유하고 관계의 부정적인 기운을 말끔히 씻어낼 준비가 되어 있어야 한다고 말한다. 만약 당신이 미혼이라면, 이 카드 는 당신을 위한 우주의 계획에 대한 외로움과 믿음의 부족을 나타냅니다. 여러분은 여러분에게 맞는 사람을 절대 만날 수 없을 것 같은 느낌이 들지도 모릅니다. 당신은 사랑에 대해 냉소적이 되고 있다고 느낄지도 모른다. 앞으로 나아가기 위해서는 두려움을 떨쳐버리고 그동안 붙잡고 있던 부정적인 기운을 버려야 한다. 사랑은 당신이 가장 기대하지 않을 때 나타날 것이다!</p>";
  }
}
var Star = {
  name: "Star",
  index: 17,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_17_Star.jpg",
  rw_addendum:
    "Loss, theft, privation, abandnment; another reading says- hope and bright prospects.\n\
  Reversed: Arrogance, haughtiness, impotence.",
  rw_meaning:Star()};

function Moon() {
  if (u == 0) {
    return "<p>이 카드는 당신에게 큰 기쁨과 행복을 나타냅니다. 그것은 여러분의 관계에서 재미, 열정, 그리고 긍정의 기간의 징후가 될 수 있습니다. 동시에, 태양은 직립 자세로 그것의 경로에 있는 모든 것에 빛을 비추고 이것은 관계를 포함하므로, 그것은 또한 여러분의 관계에 숨겨진 문제들이 강조될 것임을 나타낼 수 있습니다. 이 카드에서 강조하는 모든 문제는 여러분의 이익을 위해 해결될 것입니다. 이것은 관계가 더 개방적이고 정직해지는 형태를 취하거나 어떤 경우에는 더 나은 관계가 여러분에게 올 수 있도록 하기 위해 끝날 수 있습니다. 검증을 위해 지원 카드를 살펴보십시오. 결과가 어떻든 간에 이 카드는 당신의 연애 생활에 긍정적이고 좋은 것을 가져다 주고 있다. 이 카드는 또한 약혼이나 결혼과 같은 축하를 나타낼 수 있다. 만약 여러분이 미혼이라면, 이 카드는 여러분의 길에 멋진 관계가 올 수 있다는 것을 나타냅니다. </p>";
  } else {
    return "<p>연애 중이라면 거꾸로된 달 카드는 기만이나 거짓말이 들통날 수 있다. 불륜이 폭로될 수도 있어요. 그것은 또한 단순히 두 사람의 관계가 밝혀지는 것에 대한 진실의 표시일 수도 있습니다. 아마도 당신은 현재 관계의 상태에 대해 자신을 속이거나 파트너에 대한 특정한 것들에 대해 자신을 속여왔을 것이다. 만약 그렇다면, 이 카드는 당신이 당신의 파트너의 진실된 성격이나 관계에 대한 진실을 보게 될 것이라는 것을 보여준다. 독신인 경우 달이 역전되는 것은 불확실성의 시기를 지나 평정심과 자신감을 되찾기 시작했다는 지표가 될 수 있다. 그것은 또한 당신이 잠재적인 파트너가 당신에게 적합하지 않다는 징후나 당신의 본능을 무시하고 있을지도 모른다는 지표가 될 수 있다. 예를 들어, 독자 분이 사귀고 있는 사람이 결혼했거나 관련되었다는 경고 신호를 알아차리지만, 그것을 믿고 싶지 않기 때문에 무시하고 있는 것입니다.</p>";
  }
}
var Moon = {
  name: "The Moon",
  index: 18,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_18_Moon.jpg",
  rw_addendum:
    "Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.\n\
  Reversed: Instability, inconstancy, silence, lesser degrees of deception and error.",
  rw_meaning:Moon()};

function Sun() {
  if (u == 0) {
    return "<p>애정운에서 태양카드는 큰 기쁨과 행복을 나타냅니다. 그것은 여러분의 관계에서 재미, 열정, 그리고 긍정의 기간의 징후가 될 수 있습니다. 동시에, 태양은 직립 자세로 그것의 경로에 있는 모든 것에 빛을 비추고 이것은 관계를 포함하므로, 그것은 또한 여러분의 관계에 숨겨진 문제들이 강조될 것임을 나타낼 수 있습니다. 이 카드에서 강조하는 모든 문제는 여러분의 이익을 위해 해결될 것입니다. 이것은 관계가 더 개방적이고 정직해지는 형태를 취하거나 어떤 경우에는 더 나은 관계가 여러분에게 올 수 있도록 하기 위해 끝날 수 있습니다. 검증을 위해 지원 카드를 살펴보십시오. 결과가 어떻든 간에 태양카드는 당신의 연애 생활에 긍정적이고 좋은 것을 가져다 주고 있다. 태양은 또한 약혼이나 결혼과 같은 축하를 나타낼 수 있다. 만약 여러분이 미혼이라면 이 카드는 여러분의 길에 멋진 관계가 올 수 있다는 것을 나타냅니다.</p>";
  } else {
    return "<p>뒤집힌 태양카드는 당신이 당신의 파트너로부터 소외감을 느끼고 있다는 것을 나타내고 있습니다. 어떤 불꽃이나 열정은 그 관계에서 사라졌을 수도 있습니다. 그것은 파혼이나 취소된 결혼식을 나타내는 것일 수 있습니다. 그것은 당신이 당신과 당신의 파트너를 위해 앞으로 나아가는 길을 찾는 것을 어려워하고 있다는 것을 나타낼지도 모른다. 그것은 질투나 서로 점수를 따려고 하는 것을 의미할 수도 있다. 관계에서 긍정적인 것에 집중하고, 좋은 시간을 함께 보내려고 노력하며, 애초에 왜 함께 했는지 상기시키세요. 만약 당신이 미혼이라면 거꾸로된 태양은 당신이 너무 자기중심적이 되어 잠재적인 파트너들을 미루고 있다는 지표가 될 수 있다. 잠재적인 파트너에게 깊은 인상을 주기 위해 노력하는 것은 여러분이 계속해서 자랑하는 것을 발견할 수 있기 때문에 실제로 반대의 효과를 가져올 수 있습니다.</p>";
  }
}
var Sun = {
  name: "The Sun",
  index: 19,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_19_Sun.jpg",
  rw_addendum:
    "Material happiness, fortunate marriage, contentment.\n\
  Reversed: The same in a lesser sense.",
  rw_meaning:Sun()};

function Judgment() {
  if (u == 0) {
    return "<p>애정운에서 이 카드는 당신이나 당신의 파트너가 서로를 너무 비관적으로 바라보고 있다는 것을 나타낼 수 있습니다. 논쟁을 하는 동안 서로에게 비난이나 비난을 퍼붓는 것을 경계하고 반응을 일으키려 하면, 여러분은 의도한 것보다 더 많은 관계를 해칠 수 있습니다. 대신, 비난의 화살을 돌리려고 하지 말고 앉아서 당신이 어떻게 느끼는지 이야기하려고 노력하세요. 관계가 진전되길 원한다면 과거의 실수를 용서해야 합니다. 단순하고 개방적이며 정직한 소통으로 추락하고 있는 관계에 새로운 활력을 불어넣어 주세요. 또한 다른사람이 당신과 당신의 애인에 대한 험담을 하고 있을 가능성이 다분합니다. 이럴 때 네가 할 수 있는 최선은 그걸 극복하는 것 입니다. 그러한 일 들은 다른사람의 문제이지 당신의 문제가 아닙니다. 또는 이 카드는 당신이 사랑하는 사람과 바다 또는 바다에 의해 떨어져 있다는 것을 의미할 수 있으며 그것은 당신과 당신의 파트너가 잠시 동안 다른 나라에 살거나 장거리 관계를 맺을 수 있다는 것을 나타낼 수 있다. 만약 당신이 미혼이라면, 판단은 당신에게 잠재적인 파트너들을 너무 성급하게 판단하지 말라고 말한다. 그들이 여러분에게 옳고 그른지를 결정하기 전에 그들을 알아갈 기회를 자신에게 주세요.</p>";
  } else {
    return "<p>이 카드는 걱정 때문에 관계에 대한 결정을 회피하고 있다는 것을 나타낼 수 있습니다. 이 결정이 앞으로 나아가는 관계에 관한 것이든 끝나가는 것이든, 그것은 내려야 할 결정입니다. 판단이 뒤바뀌면 악의적인 가십이나 거짓 고발을 나타낼 수 있으므로, 만약 당신이 당신의 파트너에 대한 불쾌한 소문을 들었다면, 당신이 서둘러 판단하기 전에 반드시 사실을 알아야 한다. 이 타로 카드는 과거로부터 배우지 못해 발생한 문제를 나타낼 수도 있다. 아마도 당신과 당신의 파트너는 힘든 시기를 겪었고 당신은 지금 더 가까워져야 한다고 느끼지만 그렇지 않다. 과거의 문제에서 배울 수 있는 모든 것을 배웠는지 그리고 그 지식을 관계에 적용하고 있는지 자문해보세요. 만약 당신이 미혼이라면, 판단이 뒤바뀐 것은 당신이 수줍음이나 부끄러움이 당신이 관심 있는 사람에게 다가가지 못하게 하고 있다는 것을 나타낼 수 있다. 두려움 때문에 망설여선 안 됩니다! 그것이 당신이 원하는 방식으로 이루어지든 아니든, 적어도 당신은 당신이 노력했다는 것을 알게 될 것이고 '만약에?'라고 영원히 고민할 필요가 없을 것입니다.</p>";
  }
}
var Judgment = {
  name: "Judgment",
  index: 20,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_20_Judgement.jpg",
  rw_addendum:
    "Change of position, renewal, outcome. Another account specifies total loss through lawsuit.\n\
  Reversed: Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.",
  rw_meaning:Judgment()};

function World() {
  if (u == 0) {
    return "<p>이 카드는 당신이 열망했던 목표에 도달하는 것을 의미할 수 있다. 그것은 결혼하거나 아이를 가지거나, 아니면 여러분의 관계에서 매우 행복하고, 안전하고, 사랑스럽고 헌신적인 위치에 있는 것일 수도 있습니다. 당신과 당신의 파트너에게 열려있는 모든 세상들이 있습니다. 이 시간을 즐기세요. 당신은 지금까지 당신의 관계를 유지하기 위해 노력해야만 했습니다. 만약 당신이 미혼이라면, 이 카드는 당신에게 열려있는 많은 선택권이 있다는 것을 의미한다. 그것은 여러분이 자신과 세상에서 자신의 위치와 함께 평화롭게 지내는 단계에 도달하기 위해 개인적인 도전을 극복하기 위해 열심히 노력했음을 암시합니다. 이것은 로맨틱하게 당신에게 좋은 것만 의미할 수 있습니다, 마치 끌리는 것처럼. 여러분이 스스로에게 편안할 때, 행복하고 이 삶이 여러분에게 제공하는 가능성에 열려 있을 때, 여러분의 삶에 놀라운 누군가를 끌어들일 것입니다. 그것은 또한 당신이 여행을 하는 동안 새로운 누군가를 만날 수도 있고 그들의 직업의 일부로 여행을 많이 하는 사람을 만날 수도 있다는 징조가 될 수도 있다. 그것은 또한 당신이 인기 있고 수요가 있을 것이라는 것을 암시합니다.</p>";
  } else {
    return "<p>이 카드에서 당신은 당신의 관계가 정체되었음을 나타낼 수 있습니다. 당신과 당신의 파트너가 일을 그냥 흘려보냈을 수도 있고 관계를 정상 궤도에 오르기 위해서는 더 많은 노력을 기울여야 할 수도 있습니다. 하지만, 만약 당신이 진지한 노력을 기울여 왔지만 관계가 나아지지 않는 것 같다면 당신은 이것이 당신에게 맞는 관계인지 생각해 볼 필요가 있을 것입니다. 싱글이라면 연애생활이 물거품이 됐다고 느낄 수 있지만 그동안 제대로 된 사람을 만나기 위해 충분한 노력을 했는지 자문해볼 필요가 있습니다. 매력적인 공주는 단지 당신의 문을 두드리고 당신의 발을 쓸어내리지는 않을 것 입니다. 나가서 사람들을 만나세요. 자신을 밖으로 내보내는 것을 두려워하지 마세요. 세상이 뒤바뀌었다는 것은 당신이 예고 없이 끝난 관계에서 벗어나기 위해 애쓰고 있다는 것을 나타내는 것 일 수도 있습니다. 아마도 이전의 파트너가 예고 없이 갑자기 관계를 끊었거나 당신이 관계의 종말을 받아들이기 위해 필요한 시간을 주지 않았을 것입니다. 당신이 마감할 기회가 없었기 때문에 이것은 엄청나게 다루기 어려울 수 있습니다. 그들이 돌아오기를 기다리며 당신의 삶을 떠나보내지 마세요. 당신은 당신의 이전 파트너로부터 결코 종결되지 않을 수도 있기 때문에 당신은 일어난 일에 대해 평온을 얻는 다른 방법을 찾는 데 집중해야 합니다.</p>";
  }
}
var World = {
  name: "The World",
  index: 21,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://github.com/aelw/tt/raw/main/dist/RWS_Tarot_21_World.jpg",
  rw_addendum:
    "Assured success, recompense, voyage, route, emigration, flight, change of place.\n\
  Reversed: Inertia, fixity, stagnation, permanence.",
  rw_meaning:World()};

/*======================================DECK======================================*/

//creates array with all card objects
var tarotDeck = [
  Fool,
  Magician,
  HighPriestess,
  Empress,
  Emperor,
  Hierophant,
  Lovers,
  Chariot,
  Strength,
  Hermit,
  WheelFortune,
  Justice,
  HangedMan,
  Death,
  Temperance,
  Devil,
  Tower,
  Star,
  Moon,
  Sun,
  Judgment,
  World
];

/*=========================BASIC CARD DRAWING FUNCTIONS===========================*/

//function that draws a specific card from the deck, by index
function draw_indexed_card(index) {
  var rightCard = tarotDeck[index];
  return rightCard;
}

//function to pick random int out of 78
function pick_card_index() {
  return getRndInteger(0, 21);
}

function draw_random_card() {
  index = pick_card_index();
  rightCard = tarotDeck[index];
  console.log("You drew ...", rightCard["name"]);
  console.log("The position of this card is ...", rightCard["direction"]);
  return rightCard;
}

var show_indexed_card = function (index) {
  //identifies correct card from deck!
  var rightCard = tarotDeck[index];
  //generic display message
  // document.getElementById("results").innerHTML +="The card drawn is...<br> <br> <div class='placard-container'><div class='card-container'>";
  //testing reverse or upright
  if (rightCard["direction"] == "reversed") {
    document.getElementById("results").innerHTML +=
      "<img src= '" +
      rightCard["img"] +
      "' class='reversed'>";
  } else {
    document.getElementById("results").innerHTML +=
      "<img src= '" + rightCard["img"] + "' class='card-img'><br>";
  }
  //display card name
  // document.getElementById("results").innerHTML +=
  //   "</div>" + rightCard["name"] + ", " + rightCard["direction"];
  document.getElementById("results").innerHTML +=
    "</div>" +
    "<p>&#x1F31E; &#x1F311; &#x1F312; &#x1F313; &#x1F314; &#x1F315; &#x1F316; &#x1F317; &#x1F318; &#x1F31E;</p>";
  return rightCard;
};

var show_indexed_card_no_reverse = function (i) {
  //like show_indexed_card(), but without reversed parameter
  var rightCard = tarotDeck[i];
  document.getElementById("results").innerHTML +=
    "<h3 id='show-card-num-" + rightCard["index"] + "'>" + rightCard["index"] + ". " + rightCard["name"] +
    "</h3><img src= '" +
    rightCard["img"] +
    "' width=220 height=auto><br><div class='explanation'>" + rightCard["rw_meaning"] +
    "</div><p>&#x1F31E; &#x1F311; &#x1F312; &#x1F313; &#x1F314; &#x1F315; &#x1F316; &#x1F317; &#x1F318; &#x1F31E;</p>";
  return rightCard;
};

//function which shows all cards in Tarot deck!
var show_all_cards = function () {
  var i = 0;
  for (i = 0; i < 22; i++) {
    show_indexed_card_no_reverse(i);
  }
  window.scrollTo(0, document.getElementById("show-card-num-0").y);
  console.log(document.getElementById("show-card-num-0").y);
  console.log(document.getElementById("show-card-num-0"));
  return;
};

/*==========================CELTIC CROSS CARD DRAWING FUNCTIONS=======================*/
var draw_celtic_indices = function () {
  var indices = [];
  var result;
  while (indices.length < 10) {
    result = pick_card_index();
    if (indices.indexOf(result) == -1) {
      indices.push(result);
    }
  }
  return indices;
};

var draw_celtic_picture = function (array) {
  var i = 0;
  for (i = 0; i < 10; i++) {
    console.log("inside draw celtic picture loop");
    show_indexed_card(array[i]["img"]);
  }
};

var set_celtic_identifier = function (card_obj, i) {
  //sets celtic array: 1) takes a card object with a number assigned
  //then assigns a string name (celtic identifier) to that object
  console.log("inside set_celtic_identifier");
  switch (i) {
    case 1:
      card_obj["identifier"] = "선물";
      break;
    case 2:
      card_obj["identifier"] = "장애";
      break;
    case 3:
      card_obj["identifier"] = "과거";
      break;
    case 4:
      card_obj["identifier"] = "미래";
      break;
    case 5:
      card_obj["identifier"] = "질문자가 생각하는 미래";
      break;
    case 6:
      card_obj["identifier"] = "내면적상황";
      break;
    case 7:
      card_obj["identifier"] = "조언";
      break;
    case 8:
      card_obj["identifier"] = "영향";
      break;
    case 9:
      card_obj["identifier"] = "바람";
      break;
    case 10:
      card_obj["identifier"] = "결과";
      break;
  }
  return card_obj;
};

var is_reversed = function (direction) {
  if (direction == "reversed") {
    return true;
  }
};

var erase_display = function () {
  document.getElementById("results").innerHTML = "";
  var i = 0;
  for (i = 0; i < 10; i++) {
    var j = i + 1;
    document.getElementById("celtic-num-" + j).innerHTML = "";
  }
};

var draw_celtic_cross = function () {
  
  erase_display();
  
  console.log("inside draw_celtic_cross fct");
  //select randomized celtic indices
  var indices = draw_celtic_indices();
  console.log(indices);
  var i = 0;
  var j;
  var card;
  var celtic_result = [];
  //for each of the indices in the celtic index...
  for (i = 0; i < indices.length; i++) {
    j = i + 1;
    card = draw_indexed_card(indices[i]); //select the card associated with the index
    card["number"] = j; //assign cards to celtic indices array (celtic_result)
    set_celtic_identifier(card, card["number"]); //set a string associated with the number of celtic result
    console.log("card is ...", card);
    console.log("card['img'] is ...", card["img"]);
    document.getElementById("results").innerHTML +=
      "<div class='placard-container' id='celtic-exp-" +
      j +
      "'><div class='placard-container-item''celtic-identifier-name'>" +
      card["identifier"].toUpperCase() +
      "</div><div class='placard-container-item card-container'>" +
      "<div class='card-image-container'><img width=120px height=200px class='card-image card-container-item' src= '" +
      card["img"] +
      "' id='card-img-num-" +
      j +
      "'><p class='card-container-item' 'card-name'>" +
      card["name"] +
      ", " +
      card["direction"] +
      "</div><div class='placard-container-item card-explanation'>" +
      card["rw_meaning"] +
      "</div></div></div>";
    if (is_reversed(card["direction"])) {
      const card_image_ = document.getElementById("card-img-num-" + j);
      card_image_.classList.add("reversed");
    }
    celtic_result.push(card);
  }
  console.log("celtic result is ...", celtic_result);
  draw_cross_graphic(celtic_result);
  return celtic_result;
};

var draw_cross_graphic = function (array) {
  console.log("inside draw_cross_graphic");
  var i = 0;
  for (i = 0; i < array.length; i++) {
    var j = i + 1;
    document.getElementById("celtic-num-" + j).innerHTML +=
      "<img src= '" +
      array[i]["img"] +
      "' width=55 height=auto id='cc-img-num-" +
      j +
      "'>";
    if (is_reversed(array[i]["direction"])) {
      console.log("inside reversed,draw cross graphic");
      const cc_image_ = document.getElementById("cc-img-num-" + j);
      cc_image_.classList.add("reversed");
    }
  }
  return;
};
