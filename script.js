function generateComplaintList() {
    let complaints = [];
    
    // Проверка каждого чекбокса и добавление жалобы в список, если выбрано
    if (document.getElementById('fever').checked) complaints.push(`подъем температуры до ${document.getElementById('feverValue').value}°C`);
    if (document.getElementById('headache').checked) complaints.push('головная боль (3 балла)');
    if (document.getElementById('nausea').checked) complaints.push('тошнота');
    if (document.getElementById('vomiting').checked) complaints.push('многократная рвота');
    if (document.getElementById('vomitingTimes').checked) complaints.push(`рвота до ${document.getElementById('vomitingTimesValue').value} раз`);
    if (document.getElementById('diarrhea').checked) complaints.push(`жидкий стул до ${document.getElementById('diarrheaValue').value} раз`);
    if (document.getElementById('urineRetention').checked) complaints.push(`задержка мочи до ${document.getElementById('urineRetentionValue').value} часов`);
    if (document.getElementById('stoolRetention').checked) complaints.push(`задержка стула до ${document.getElementById('stoolRetentionValue').value} суток`);
    if (document.getElementById('abdominalPain').checked) complaints.push('периодические боли в животе (3 балла)');
    if (document.getElementById('painLocation').checked) complaints.push(`боли (3 балла) в ${document.getElementById('painLocationValue').value}`);
    if (document.getElementById('urinationPain').checked) complaints.push('боли (3 балла) при мочеиспускании');
    if (document.getElementById('skinRedness').checked) complaints.push(`гиперемия кожи в ${document.getElementById('skinRednessValue').value}`);
    if (document.getElementById('prepuceSwelling').checked) complaints.push('отек, гиперемия крайней плоти');
    if (document.getElementById('scrotumSwelling').checked) complaints.push(`отек, гиперемия ${document.getElementById('scrotumSide').value} половины мошонки`);
    if (document.getElementById('fingerPain').checked) complaints.push(`боль (3 балла) в области ${document.getElementById('fingerArea').value} пальца ${document.getElementById('fingerLocation').value}`);
    if (document.getElementById('swellingPain').checked) complaints.push(`отек, гиперемия, боль (3 балла) в ${document.getElementById('swellingPainValue').value}`);
    if (document.getElementById('purulentDischarge').checked) complaints.push(`гнойное отделяемое в ${document.getElementById('purulentDischargeValue').value}`);
    if (document.getElementById('woundType').checked) complaints.push(`${document.getElementById('woundType').value} рана в ${document.getElementById('woundLocation').value}`);
    if (document.getElementById('limp').checked) complaints.push(`хромота на ${document.getElementById('limpSide').value} ногу`);
    if (document.getElementById('foreignBody').checked) complaints.push(`со слов родителей проглотил инородное тело ${document.getElementById('foreignBodyValue').value}`);
    if (document.getElementById('cough').checked) complaints.push('кашель');
    if (document.getElementById('dyspnea').checked) complaints.push('одышка');
    if (document.getElementById('heartburn').checked) complaints.push('изжога');
    if (document.getElementById('allergicReaction').checked) complaints.push(`аллергическая реакция в ${document.getElementById('allergicReactionValue').value}`);
    if (document.getElementById('itching').checked) complaints.push(`зуд в ${document.getElementById('itchingValue').value}`);
    if (document.getElementById('rash').checked) complaints.push(`сыпь по типу ${document.getElementById('rashType').value} в ${document.getElementById('rashLocation').value}`);
    if (document.getElementById('growth').checked) complaints.push(`образование в ${document.getElementById('growthValue').value}`);
    if (document.getElementById('hernia').checked) complaints.push(`грыжевое выпячивание в ${document.getElementById('herniaSide').value} паховой области`);
    
    document.getElementById('generatedComplaints').textContent = complaints.join(', ');
}
