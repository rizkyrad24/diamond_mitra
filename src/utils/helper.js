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

export function mapperStatus(positionLevel, status, attachments, isStopClock) {
  const fileKemitraan = {
    file1: null,
    file2: null,
    file3: null,
    file4: null,
    file5: null,
    file6: null,
    file7: null,
  }
  attachments.forEach(item => {
    if (item.fileType == 'Surat Penawaran') {
      fileKemitraan['file1'] = item.fileName
    }
    if (item.fileType == 'Proposal') {
      fileKemitraan['file2'] = item.fileName
    }
    if (item.fileType == 'Evaluasi') {
      fileKemitraan['file3'] = item.fileName
    }
    if (item.fileType == 'Negosiasi') {
      fileKemitraan['file4'] = item.fileName
    }
    if (item.fileType == 'BAK Pemilihan Mitra') {
      fileKemitraan['file5'] = item.fileName
    }
    if (item.fileType == 'Surat Pesanan') {
      fileKemitraan['file6'] = item.fileName
    }
    if (item.fileType == 'PKS') {
      fileKemitraan['file7'] = item.fileName
    }
  })
  if (status == 'Pengajuan StopClock') {
    return ['Pengajuan StopClock', 'bg-[#FFE5E6] text-[#FF8000] border-[#FFD6AD]']
  }
  if (status == 'Pengajuan StartClock') {
    return ['Pengajuan StartClock', 'bg-[#FFE5E6] text-[#FF8000] border-[#FFD6AD]']
  }
  if (isStopClock) {
    return ['StopClock', 'bg-[#FFE5E6] text-[#FF8000] border-[#FFD6AD]']
  }
  if (status == 'Approved' && positionLevel >= 8) {
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
    return ['Waiting Approval Manager', 'bg-[#FFF6E1] text-[#FFB200] border-[#FFD064]']
  }
  if (positionLevel == 2) {
    return ['Waiting Approval VP', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 3) {
    return ['Masuk Kemitraan', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 4) {
    return ['Masuk Ke Staff Kemitraan', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 5 && fileKemitraan.file7) {
    return ['PKS', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 5 && fileKemitraan.file6) {
    return ['Surat Pesanan', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 5 && fileKemitraan.file5) {
    return ['BAK Pemilihan Mitra', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 5 && fileKemitraan.file4) {
    return ['Negosiasi', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 5 && fileKemitraan.file3) {
    return ['Evaluasi', 'bg-[#E7F1FD] text-[#4791F2] border-[#91BEF7]']
  }
  if (positionLevel == 5 && fileKemitraan.file2) {
    return ['Proposal', 'bg-[#E7F1FD] text-[#4791F2] border-[#91BEF7]']
  }
  if (positionLevel == 5 && fileKemitraan.file1) {
    return ['Surat Penawaran', 'bg-[#E7F1FD] text-[#4791F2] border-[#91BEF7]']
  }
  if (positionLevel == 5) {
    return ['DiProses Staff Kemitraan', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 6) {
    return ['Waiting Approval Manager Kemitraan', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 7) {
    return ['Pembuatan Kontrak', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 8) {
    return ['Waiting Approval VP Kemitraan', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 9) {
    return ['Waiting Approval Direktur Kemitraan', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
  }
  if (positionLevel == 10) {
    return ['Disetujui Direktur Kemitraan', 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]']
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