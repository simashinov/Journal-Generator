window.onload = function() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById('complaintsStartDate').value = today;
};
