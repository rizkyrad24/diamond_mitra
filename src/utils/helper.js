export function parseStatusAproval(positionLevel, status) {
    if (status?.includes("Revisi")) {
      return "Revisi"
    }
    if (status == 'Pengajuan StopClock') {
      return "Pengajuan StopClock"
    }
    if (status == 'Pengajuan StartClock') {
      return "Pengajuan StartClock"
    }
    if (status == 'Approved' && positionLevel >= 8) {
      return "Selesai"
    }
    if (status == 'Ditolak') {
      return "Ditolak"
    }
    if (positionLevel == 1) {
      return "Waiting Approval"
    }
    if (positionLevel == 2) {
      return "Approval Manager"
    }
    if (positionLevel == 3) {
      return "Masuk"
    }
    if (positionLevel == 4) {
      return "Dispose Ke Staff"
    }
    if (positionLevel == 5) {
      return "Diterima Staff"
    }
    if (positionLevel == 6) {
      return "Pengajuan Manager"
    }
    if (positionLevel == 7) {
      return "Approval Manager"
    }
    if (positionLevel == 8) {
      return "Approval VP"
    }
    if (positionLevel == 9) {
      return "Approval Direktur"
    }
    return status
}

export function saveDataLogin(dataUser) {
  localStorage.setItem('access', dataUser.token);
  localStorage.setItem('username', dataUser.username);
  localStorage.setItem('firsName', dataUser.firsName);
  localStorage.setItem('lastName', dataUser.lastName);
  localStorage.setItem('position', dataUser.role);
}

export function clearDataLogin() {
  localStorage.removeItem('access');
  localStorage.removeItem('username');
  localStorage.removeItem('firsName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('position');
}

export function mapperStatus(positionLevel, status) {
  if (status == 'Selesai') {
    return ['Selesai', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (status == 'Ditolak') {
    return ['Ditolak', 'bg-[#FFE5E6] text-[#FF5656] border-[#FD8A8A]']
  }
  if ('Revisi'.includes(status)) {
    return ['Revisi', 'bg-[#FFE5E6] text-[#FF8000] border-[#FFD6AD]']
  }
  if (positionLevel == 0) {
    return ['Draft', 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]']
  }
  if (positionLevel == 1) {
    return ['Waiting Approval', 'bg-[#FFF6E1] text-[#FFB200] border-[#FFD064]']
  }
  if (positionLevel == 2) {
    return ['Approval Manager', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 3) {
    return ['Masuk', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 4) {
    return ['Masuk Kemitraan', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
}

export function mapperKeterangan(positionLevel, status) {
  if (status == 'Selesai') {
    return 'Pengajuan Selesai'
  }
  if (status == 'Ditolak') {
    if (positionLevel == 1) {
      return 'Pengajuan Ditolak Oleh Manager'
    }
    if (positionLevel == 2) {
      return 'Pengajuan Ditolak Oleh VP'
    }
    if (positionLevel > 2) {
      return 'Pengajuan Ditolak Kemitraan'
    }
    else {
      return 'Pengajuan Ditolak'
    }
  }
  return ''
}

export const dateParsing = (input) => {
  if (input.includes("-")) {
    const [year, month, date] = input.split("-")
    return `${date}-${month}-${year}`
  }
  return input
}

export const dueDateParsing = (input) => {
  if (input.includes("-")) {
    const targetDate = new Date('2025-01-20');
    const today = new Date();
    const differenceInMillis = targetDate - today;
    const differenceInDays = Math.ceil(differenceInMillis / (1000 * 60 * 60 * 24));
    return differenceInDays
  }
  return input
}